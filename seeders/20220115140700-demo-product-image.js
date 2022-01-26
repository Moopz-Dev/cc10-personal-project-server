"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"productImages",
			[
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1642471577/sample.jpg",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1642490494/omkarnkhwjkxjgorfo2r.png",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1642586023/vsyse2jgo3axwkywaiko.jpg",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1642668478/utjccktuzzhw1227exfa.jpg",
					productId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1642653746/hqpjsgcptkvmjdtakttf.png",
					productId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("productImages", null, {});
	},
};
