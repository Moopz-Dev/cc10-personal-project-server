const { Order, OrderItem } = require("../models");

exports.getOrders = async (req, res, next) => {
	try {
		const orders = await Order.findAll({
			include: {
				model: OrderItem,
				attributes: ["quantity", "price", "id", "title"],
			},
		});
		res.status(200).json(orders);
	} catch (error) {
		next(error);
	}
};
exports.updateOrder = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { status } = req.body;
		const order = await Order.findOne({
			where: { id },
			include: {
				model: OrderItem,
				attributes: ["quantity", "price", "title"],
			},
		});
		await order.update({ status });
		res.status(200).json(order);
	} catch (error) {
		next(error);
	}
};

exports.updateTracking = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { tracking } = req.body;
		const order = await Order.findOne({
			where: { id },
		});
		await order.update({ tracking });
		res.status(200).json(order);
	} catch (error) {
		next(error);
	}
};
