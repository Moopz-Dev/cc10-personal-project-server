const { User, CartItem, Product, ProductImage } = require("../models");

exports.getCartItems = async (req, res, next) => {
	try {
		const user = await User.findOne({ where: { id: req.user.id } });
		const cart = await CartItem.findAll({
			where: { userId: user.id },
			attributes: ["id", "amount", "productId", "userId"],
			include: {
				model: Product,
				attributes: ["title", "price", "color", "brand"],
				include: {
					model: ProductImage,
					attributes: ["imageUrl"],
				},
			},
		});
		res.status(200).json(cart);
	} catch (error) {
		next(error);
	}
};
exports.addCartItems = async (req, res, next) => {
	try {
		const user = await User.findOne({ where: { id: req.user.id } });
		console.log(user.id);
		const { productId } = req.params;
		const cartItem = await CartItem.findOne({
			where: { productId, userId: user.id },
		});
		if (!cartItem) {
			await CartItem.create({
				userId: 2,
				productId,
				amount: 1,
			});
		} else {
			await cartItem.update({
				amount: cartItem.amount + 1,
			});
		}
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};

exports.decreaseCartItems = async (req, res, next) => {
	try {
		const user = await User.findOne({ where: { id: req.user.id } });
		const { id } = req.params;
		const cartItem = await CartItem.findOne({
			where: { userId: user.id, id },
		});
		if (!cartItem) {
			res.status(400).json({ message: "cartItem does not exist." });
		}

		await cartItem.update({ amount: cartItem.amount - 1 });
		if (cartItem.amount < 1) {
			cartItem.destroy();
		}
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};
exports.deleteCartItems = async (req, res, next) => {
	try {
		const user = await User.findOne({ where: { id: req.user.id } });
		const { id } = req.params;
		const cartItem = await CartItem.findOne({
			where: { userId: user.id, id },
		});
		if (!cartItem) {
			res.status(400).json({ message: "cartItem does not exist." });
		}

		await cartItem.destroy();
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};
