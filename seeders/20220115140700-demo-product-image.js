"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"productImages",
			[
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221243/A0097740OK_BIG_1_rqe208.webp",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221293/A0097740OK_BIG_4_gnulio.jpg",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221242/A0097740OK_BIG_5_obtear.webp",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221295/A0137220OK_BIG_3_vrqqfy.webp",
					productId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221295/A0137220OK_BIG_4_jdgunt.webp",
					productId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221295/A0137220OK_BIG_1_iqybgn.webp",
					productId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221295/A0137220OK_BIG_1_iqybgn.webp",
					productId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221295/A0137220OK_BIG_3_vrqqfy.webp",
					productId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221295/A0137220OK_BIG_4_jdgunt.webp",
					productId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221296/A0134017OK_BIG_1_z96gag.webp",
					productId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221296/A0134017OK_BIG_3_jzaxwu.webp",
					productId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221301/A0140311OK_BIG_1_zbmqyg.webp",
					productId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221297/A0140311OK_BIG_5_vqygkl.webp",
					productId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221302/A0135269OK_BIG_2_rsbldq.webp",
					productId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644221297/A0135269OK_BIG_1_ox1j7g.webp",
					productId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644227245/A0130410OK_BIG_1_h1cxjt.webp",
					productId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644227245/A0130410OK_BIG_2_yaggoz.webp",
					productId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644227584/A0128465OK_BIG_1_ebsngc.webp",
					productId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644227585/A0128465OK_BIG_3_igenzy.webp",
					productId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644227586/A0128465OK_BIG_2_knzjov.webp",
					productId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644228151/A0141270OK_BIG_1_jlqabg.webp",
					productId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644228149/A0141270OK_BIG_2_dovf5m.webp",
					productId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644228149/A0141270OK_BIG_3_ea7fyr.webp",
					productId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644723365/product%20pics/10/A0137265OK_BIG_1_vdn6lc.webp",
					productId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644723365/product%20pics/10/A0137265OK_BIG_2_nkl8ha.webp",
					productId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644723365/product%20pics/10/A0137265OK_BIG_3_t2i75v.webp",
					productId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644723381/product%20pics/11/A0139944_2_ue2lbd.webp",
					productId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644723381/product%20pics/11/A0139944_5_d3v6ot.webp",
					productId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644723381/product%20pics/11/A0139944_4_rvxpy9.webp",
					productId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644723390/product%20pics/12/A0137568_2_achtip.webp",
					productId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644723390/product%20pics/12/A0137568_4_z4zsoj.webp",
					productId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dogcup7i2/image/upload/v1644723390/product%20pics/12/A0137568_5_zsttjf.webp",
					productId: 12,
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
