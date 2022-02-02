"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Coupons", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			couponCode: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			expiryDate: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			discount: {
				allowNull: false,
				type: Sequelize.DECIMAL,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Coupons");
	},
};
