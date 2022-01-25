"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			slug: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			price: {
				type: Sequelize.DECIMAL,
				allowNull: false,
				defaultValue: 0,
			},
			quantity: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			sold: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: false,
				defaultValue: "default_strings",
			},
			color: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: "unspecified",
			},
			brand: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: "unspecified",
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			subCategoryId: {
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: {
						tableName: "subcategories",
					},
					key: "id",
				},
				allowNull: false,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Products");
	},
};
