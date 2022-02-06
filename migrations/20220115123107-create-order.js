"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Orders", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: "UNPAID",
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			discount: {
				type: Sequelize.DECIMAL,
				allowNull: false,
				defaultValue: 0,
			},
			address: {
				type: Sequelize.STRING,
			},
			userId: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable("Orders");
	},
};
