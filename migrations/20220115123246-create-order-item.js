"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Order_Items", {
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
			orderId: {
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: {
						tableName: "orders",
					},
					key: "id",
				},
				allowNull: false,
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
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Order_Items");
	},
};
