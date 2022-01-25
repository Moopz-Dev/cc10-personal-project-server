"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"cartItems",
			[
				{
					amount: "1",
					productId: "1",
					userId: "2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					amount: "3",
					productId: "2",
					userId: "2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					amount: "1",
					productId: "3",
					userId: "3",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("cartItems", null, {});
	},
};
