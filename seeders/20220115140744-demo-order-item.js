"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"order_items",
			[
				{
					amount: "1",
					orderId: "2",
					productId: "2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					amount: "1",
					orderId: "1",
					productId: "5",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("order_items", null, {});
	},
};
