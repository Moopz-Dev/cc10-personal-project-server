const stripe = require("stripe")(process.env.STRIPE_SECRET);

const { Category, Product, Coupon, CartItem, User } = require("../models");

exports.createPaymentIntent = async (req, res, next) => {
	try {
		const user = await User.findOne({ where: { id: req.user.id } });
		const cart = await CartItem.findAll({
			where: { userId: user.id },
			attributes: ["amount"],
			include: {
				model: Product,
				attributes: ["price"],
			},
		});
		const cartTotal = cart.reduce((acc, item) => {
			return +acc + item.Product.price * item.amount;
		}, 0);
		console.log(cartTotal);
		const paymentIntent = await stripe.paymentIntents.create({
			amount: 100,
			currency: "usd",
		});

		res.status(200).json({ clientSecret: paymentIntent.client_secret });
	} catch (error) {
		next(error);
	}
};
