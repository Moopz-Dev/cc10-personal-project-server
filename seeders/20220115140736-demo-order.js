"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"orders",
			[
				{
					status: "UNPAID",
					discount: "0",
					userId: "1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "UNPAID",
					discount: "10",
					userId: "2",
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
