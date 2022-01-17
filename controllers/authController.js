const bcrypt = require("bcryptjs");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

exports.register = async (req, res, next) => {
	try {
		const { email, password, confirmPassword, username, address } = req.body;

		//check that password is not mistyped
		if (password !== confirmPassword) {
			return res
				.status(400)
				.json({ message: "password and confirm password didn't match" });
		}

		//check for username duplication
		const existUsername = await User.findOne({ where: { username: username } });
		if (existUsername) {
			return res
				.status(400)
				.json({ message: "This username is already taken" });
		}

		//check for invalid email
		const isEmail = email.match(emailRegex);
		if (!isEmail) {
			return res.status(400).json({ message: "Invalid Email Format." });
		}

		//check for email duplication
		const existEmail = await User.findOne({
			where: { email: email },
		});
		if (existEmail) {
			return res.status(400).json({ message: "this email is already in use" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({
			username,
			address,
			email,
			address,
			password: hashedPassword,
		});
		return res.status(201).json({ message: "user created" });
	} catch (err) {
		next(err);
	}
};

exports.login = async (req, res, next) => {
	try {
		const { emailOrUsername, password } = req.body;
		const isEmail = emailOrUsername.match(emailRegex);
		let user;
		if (isEmail) {
			user = await User.findOne({ where: { email: emailOrUsername } });
		} else {
			user = await User.findOne({ where: { username: emailOrUsername } });
		}
		if (!user) {
			return res
				.status(400)
				.json({ message: "invalid email, phone number or password" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res
				.status(400)
				.json({ message: "invalid email, phone number or password" });
		}

		const payload = {
			id: user.id,
			email: user.email,
			role: user.role,
		};
		const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
			expiresIn: 60 * 60 * 24 * 30 * 1000,
		});
		return res.status(200).json({ token });
	} catch (err) {
		next(err);
	}
};
