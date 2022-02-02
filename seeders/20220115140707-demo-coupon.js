"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"coupons",
			[
				{
					couponCode: "CHRISTMAS2021",
					expiryDate: new Date("2021-12-31"),
					discount: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					couponCode: "VALENTINE2022",
					expiryDate: new Date("2022-02-18"),
					discount: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("coupons", null, {});
	},
};
