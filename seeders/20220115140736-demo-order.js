"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"orders",
			[
				{
					status: "completed",
					couponId: "2",
					userId: "2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "processing",
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
