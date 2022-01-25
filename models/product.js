"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Product.hasMany(models.OrderItem);
			Product.hasMany(models.CartItem);
			Product.hasMany(models.ProductImage);
			Product.belongsTo(models.SubCategory);
		}
	}
	Product.init(
		{
			slug: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			title: DataTypes.STRING,
			price: DataTypes.DECIMAL,
			quantity: DataTypes.INTEGER,
			sold: DataTypes.INTEGER,
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "Product",
		}
	);
	return Product;
};
