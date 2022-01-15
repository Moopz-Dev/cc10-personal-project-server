"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Cart_Items", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			amount: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			productId: {
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: {
						tableName: "products",
					},
					key: "id",
				},
				allowNull: false,
			},
			userId: {
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: {
						tableName: "users",
					},
					key: "id",
				},
				allowNull: false,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Cart_Items");
	},
};
