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
			// Product.hasMany(models.OrderItem, { foreignKey: "productId" });
			Product.hasMany(models.ProductImage, { foreignKey: "productId" });
			Product.hasMany(models.ProductRating, { foreignKey: "productId" });
			Product.hasMany(models.CartItem, { foreignKey: "productId" });
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
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			price: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				defaultValue: 0,
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			sold: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
				defaultValue: "description",
			},
			color: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "BLACK",
			},
			brand: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "SAMSUNG",
			},
			subCategoryId: {
				type: DataTypes.INTEGER,
				references: {
					model: {
						tableName: "subcategories",
					},
					key: "id",
				},
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Product",
		}
	);
	return Product;
};
