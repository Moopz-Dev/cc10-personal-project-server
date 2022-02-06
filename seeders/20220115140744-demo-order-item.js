"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"orderItems",
			[
				{
					title: "Iphone Pro 13",
					price: "15000",
					quantity: "2",
					orderId: "2",
					productId: "4",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Macbook Pro 13",
					price: "5000",
					quantity: "5",
					orderId: "1",
					productId: "5",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Chinese Mouse",
					price: "200",
					quantity: "1",
					orderId: "2",
					productId: "1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Taiwanese Mouse",
					price: "2000",
					quantity: "3",
					orderId: "3",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("orderItems", null, {});
	},
};
