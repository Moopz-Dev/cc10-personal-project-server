"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class SubCategory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			SubCategory.belongsTo(models.Category);
			SubCategory.hasMany(models.Product);
		}
	}
	SubCategory.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "SubCategory",
			underscored: true,
		}
	);
	return SubCategory;
};
