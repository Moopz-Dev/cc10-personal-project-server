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
					phoneNumber: "0909969848",
					password: bcrypt.hashSync("123456", 12),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: "john",
					role: "user",
					email: "john@gmail.com",
					phoneNumber: "0909969876",
					password: bcrypt.hashSync("123456", 12),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: "andy",
					role: "user",
					email: "andy@gmail.com",
					phoneNumber: "0909969111",
					password: bcrypt.hashSync("123456", 12),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: "jeff",
					role: "user",
					email: "jeff@gmail.com",
					phoneNumber: "0909969222",
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
