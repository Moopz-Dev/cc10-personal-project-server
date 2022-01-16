"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"products",
			[
				{
					subCategoryId: "1",
					title: "LG 19M38A-B (TN, VGA) 60Hz",
					price: "3090",
					quantity: "100",
					sold: "0",
					description: "description",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					subCategoryId: "1",
					title: "ACER EH200Qbi (TN, VGA, HDMI) 60Hz",
					price: "3350",
					quantity: "100",
					sold: "0",
					description: "description",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					subCategoryId: "2",
					title: "DELL SE2222H (VA, VGA, HDMI) 60Hz",
					price: "4900",
					quantity: "100",
					sold: "0",
					description: "description",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					subCategoryId: "2",
					title: "SAMSUNG LF24T350FHEXXT (IPS, VGA, HDMI) 75Hz",
					price: "4650",
					quantity: "100",
					sold: "0",
					description: "description",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					subCategoryId: "3",
					title: "PHILIPS 272E1GSJ/67 (VA, HDMI, DP) FREESYNC 144Hz",
					price: "6900",
					quantity: "100",
					sold: "0",
					description: "description",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					subCategoryId: "3",
					title: "GIGABYTE G27F (IPS, DP, HDMI, USB, SPK) 144Hz",
					price: "7990",
					quantity: "100",
					sold: "0",
					description: "description",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("products", null, {});
	},
};
