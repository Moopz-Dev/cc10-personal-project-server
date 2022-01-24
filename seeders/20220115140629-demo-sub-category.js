"use strict";
const slugify = require("slugify");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"sub_categories",
			[
				{
					name: "Below 20 inches",
					slug: slugify("Below 20 inches"),
					categoryId: "1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "20 - 25 inches",
					slug: slugify("20 - 25 inches"),
					categoryId: "1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Above 25 inches",
					slug: slugify("Above 25 inches"),
					categoryId: "1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Mouses",
					slug: slugify("Mouses"),
					categoryId: "2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Keyboards",
					slug: slugify("Keyboards"),
					categoryId: "2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Gaming laptops",
					slug: slugify("Gaming laptops"),
					categoryId: "3",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Workstation laptops",
					slug: slugify("Workstation laptops"),
					categoryId: "3",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Apple smartphones",
					slug: slugify("Apple smartphones"),
					categoryId: "4",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Android smartphones",
					slug: slugify("Android smartphones"),
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
