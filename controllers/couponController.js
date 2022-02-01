const { Coupon } = require("../models");

exports.getCoupon = async (req, res, next) => {
	try {
		const coupon = await Coupon.findAll();
		res.status(200).json(coupon);
	} catch (error) {
		next(error);
	}
};
exports.createCoupon = async (req, res, next) => {
	try {
		const { couponCode, expiryDate, discount } = req.body;
		const coupon = await Coupon.create({
			couponCode,
			expiryDate,
			discount,
		});
		res.status(200).json(coupon);
	} catch (error) {
		next(error);
	}
};
exports.deleteCoupon = async (req, res, next) => {
	try {
		const { id } = req.params;
		const coupon = await Coupon.findOne({ where: { id } });
		await coupon.destroy();
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};
