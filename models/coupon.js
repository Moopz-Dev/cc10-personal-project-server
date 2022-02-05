"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Coupon extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			// Coupon.hasMany(models.Order, { foreignKey: "orderId" });
		}
	}
	Coupon.init(
		{
			couponCode: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			expiryDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			discount: {
				type: DataTypes.DECIMAL,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Coupon",
		}
	);
	return Coupon;
};
