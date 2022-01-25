"use strict";
const slugify = require("../config/slugify");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"categories",
			[
				{
					name: "Monitors",
					slug: slugify("Monitors"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Accessories",
					slug: slugify("Accessories"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Laptops",
					slug: slugify("Laptops"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Smartphones",
					slug: slugify("Smartphones"),
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
