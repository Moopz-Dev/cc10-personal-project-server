"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"sub_categories",
			[
				{
					name: "below 20 inches",
					categoryId: "1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "20 - 25 inches",
					categoryId: "1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "above 25 inches",
					categoryId: "1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "mouses",
					categoryId: "2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "keyboards",
					categoryId: "2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "gaming laptops",
					categoryId: "3",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "productivity laptops",
					categoryId: "3",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "apple smartphones",
					categoryId: "4",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "android smartphones",
					categoryId: "4",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("sub_categories", null, {});
	},
};
