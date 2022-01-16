"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"categories",
			[
				{
					name: "monitor",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "accessories",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "laptop",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "smartphone",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("categories", null, {});
	},
};
