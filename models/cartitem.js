"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CartItem extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			CartItem.belongsTo(models.User);
			CartItem.belongsTo(models.Product);
		}
	}
	CartItem.init(
		{
			amount: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 1,
			},
			productId: {
				type: DataTypes.INTEGER,
				references: {
					model: {
						tableName: "products",
					},
					key: "id",
				},
				allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER,
				references: {
					model: {
						tableName: "users",
					},
					key: "id",
				},
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "CartItem",
		}
	);
	return CartItem;
};
