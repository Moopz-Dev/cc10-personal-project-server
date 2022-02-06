const { Op } = require("sequelize");
const {
	User,
	Coupon,
	Order,
	OrderItem,
	CartItem,
	Product,
} = require("../models");

// exports.updateUserAddress = async (req, res, next) => {
// 	try {
// 		const { address } = req.body;
// 		const user = await User.findOne({ where: { id: req.user.id } });
// 		if (user.id !== req.user.id) {
// 			return res.status(403).json({ message: "forbidden" });
// 		}

// 		if (!address) {
// 			return res.status(400).json({ message: "address can't be empty" });
// 		}
// 		await user.update({
// 			address,
// 		});

// 		res.status(204).json();
// 	} catch (error) {
// 		next(error);
// 	}
// };

// exports.getUserAddress = async (req, res, next) => {
// 	try {
// 		const user = await User.findOne({
// 			where: { id: req.user.id },
// 			// attributes: ["address"],
// 		});
// 		res.status(200).json(user);
// 	} catch (error) {
// 		next(error);
// 	}
// };

exports.applyCoupon = async (req, res, next) => {
	try {
		const { couponCode } = req.body;
		const date = new Date();
		const validCoupon = await Coupon.findOne({ where: { couponCode } });
		if (!validCoupon) {
			return res.status(400).json({ message: "This coupon code is invalid" });
		}
		if (validCoupon.expiryDate - date < 0) {
			return res
				.status(400)
				.json({ message: "This coupon is already expired." });
		}
		res.status(200).json(validCoupon);
	} catch (error) {
		next(error);
	}
};

exports.createOrder = async (req, res, next) => {
	try {
		const user = await User.findOne({ where: { id: req.user.id } });
		if (!user) {
			return res.status(400).json({ message: "This user does not exist" });
		}
		const { couponCode, address } = req.body;
		console.log(couponCode);
		console.log(address);
		let items = await CartItem.findAll({
			where: { userId: user.id },
			include: {
				model: Product,
				attributes: ["title", "price"],
			},
		});

		if (!items) {
			return (
				res.status(400),
				json({ message: "Your Cart is empty, cannot create order." })
			);
		}
		items = JSON.parse(JSON.stringify(items));

		const order = await Order.create({
			userId: user.id,
			address,
		});
		const validCoupon = await Coupon.findOne({ where: { couponCode } });

		if (validCoupon) {
			await order.update({ discount: validCoupon.discount });
		}

		await CartItem.destroy({ where: { userId: user.id } });

		for (let x = 0; x < items.length; x++) {
			await OrderItem.create({
				orderId: order.id,
				quantity: items[x].amount,
				title: items[x].Product.title,
				price: items[x].Product.price,
				productId: item[x].Product.id,
			});
			// await Product.increment(
			// 	{
			// 		quantity: -items[x].amount,
			// 		sold: items[x].amount,
			// 	},
			// 	{ where: { id: items[x].productId } }
			// );
		}
		res.status(200).json({ message: "Order has been created." });
	} catch (error) {
		next(error);
	}
};

exports.getOrders = async (req, res, next) => {
	try {
		const user = await User.findOne({ where: { id: req.user.id } });
		if (!user) {
			return res.status(400).json({ message: "This user does not exist" });
		}
		const orders = await Order.findAll({
			where: { userId: user.id },
			include: { model: OrderItem },
			order: [["createdAt", "DESC"]],
		});
		res.status(200).json(orders);
	} catch (error) {
		next(error);
	}
};

exports.cancelOrder = async (req, res, next) => {
	try {
		const { id } = req.params;
		const order = await Order.findOne({ where: { id } });
		const user = await User.findOne({ where: { id: req.user.id } });
		if (!user) {
			return res.status(400).json({ message: "This user does not exist" });
		}
		if (order.userId !== user.id) {
			return res.status(403).json({ message: "Unauthorized" });
		}
		await order.update({ status: "CANCELLED" });
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};
