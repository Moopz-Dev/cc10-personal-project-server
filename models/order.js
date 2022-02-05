"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Order.hasMany(models.OrderItem, { foreignKey: "orderId" });
			Order.belongsTo(models.User);
		}
	}
	Order.init(
		{
			status: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "UNPAID",
			},
			discount: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				defaultValue: 0,
			},
		},
		{
			sequelize,
			modelName: "Order",
		}
	);
	return Order;
};
