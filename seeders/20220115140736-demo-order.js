"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"orders",
			[
				{
					status: "UNPAID",
					discount: "0",
					userId: "2",
					address: "address123",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "UNPAID",
					discount: "10",
					userId: "2",
					address: "address456",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "DISPATCHED",
					discount: "15",
					userId: "2",
					address: "address789",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("orders", null, {});
	},
};
