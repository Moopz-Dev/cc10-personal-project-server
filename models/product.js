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
				defaultValue: "unspecified",
			},
			brand: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "unspecified",
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
