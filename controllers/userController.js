const { Op } = require("sequelize");
const { User } = require("../models");

exports.updateUserAddress = async (req, res, next) => {
	try {
		const { address } = req.body;
		const user = await User.findOne({ where: { id: req.user.id } });
		if (user.id !== req.user.id) {
			return res.status(403).json({ message: "forbidden" });
		}

		if (!address) {
			return res.status(400).json({ message: "address can't be empty" });
		}
		await user.update({
			address,
		});

		res.status(204).json();
	} catch (error) {
		next(error);
	}
};

exports.getUserAddress = async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: { id: req.user.id },
			// attributes: ["address"],
		});
		console.log(user);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};

exports.createOrder = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

exports.getOrders = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

exports.useCoupon = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
