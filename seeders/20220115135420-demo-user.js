"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"users",
			[
				{
					username: "admin",
					role: "admin",
					email: "admin@gmail.com",
					password: bcrypt.hashSync("admin", 12),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: "john",
					role: "user",
					email: "john@gmail.com",
					password: bcrypt.hashSync("123456", 12),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: "andy",
					role: "user",
					email: "andy@gmail.com",
					password: bcrypt.hashSync("123456", 12),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: "jeff",
					role: "user",
					email: "jeff@gmail.com",
					password: bcrypt.hashSync("123456", 12),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("users", null, {});
	},
};
