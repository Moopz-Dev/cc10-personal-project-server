const { Op } = require("sequelize");
const {
	Category,
	Product,
	SubCategory,
	ProductImage,
	CartItem,
	ProductRating,
	User,
} = require("../models");
const slugify = require("../config/slugify");

exports.getSomeProduct = async (req, res, next) => {
	try {
		const { count } = req.params;
		let products = await Product.findAll({
			limit: Number(count),
			attributes: [
				"id",
				"title",
				"slug",
				"price",
				"quantity",
				"sold",
				"description",
				"color",
				"brand",
				"createdAt",
				"updatedAt",
			],
			order: [["createdAt", "DESC"]],
			include: [
				{
					model: SubCategory,
					attributes: ["id", "name", "slug", "categoryId"],
					include: [{ model: Category, attributes: ["id", "name", "slug"] }],
				},
				{
					model: ProductImage,
					attributes: ["imageUrl"],
				},
				{
					model: ProductRating,
					attributes: ["rating"],
				},
			],
		});

		res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

//// without pagination
// exports.getAllProduct = async (req, res, next) => {
// 	try {
// 		const { order, ascOrDesc, limit } = req.body;
// 		let products = await Product.findAll({
// 			limit: Number(limit),
// 			attributes: [
// 				"id",
// 				"title",
// 				"slug",
// 				"price",
// 				"quantity",
// 				"sold",
// 				"description",
// 				"color",
// 				"brand",
// 				"createdAt",
// 				"updatedAt",
// 			],
// 			order: [[order, ascOrDesc]],
// 			include: [
// 				{
// 					model: SubCategory,
// 					attributes: ["id", "name", "slug", "categoryId"],
// 					include: [{ model: Category, attributes: ["id", "name", "slug"] }],
// 				},
// 				{
// 					model: ProductImage,
// 					attributes: ["imageUrl"],
// 				},
// 			],
// 		});

// 		res.status(200).json(products);
// 	} catch (error) {
// 		next(error);
// 	}
// };

////with pagination
exports.getAllProduct = async (req, res, next) => {
	try {
		const { order, ascOrDesc, page } = req.body;
		const currentPage = page || 1;
		const perPage = 3;
		const offset = (currentPage - 1) * perPage;
		let products = await Product.findAll({
			limit: Number(perPage),
			offset: Number(offset),
			attributes: [
				"id",
				"title",
				"slug",
				"price",
				"quantity",
				"sold",
				"description",
				"color",
				"brand",
				"createdAt",
				"updatedAt",
			],
			order: [[order, ascOrDesc]],
			include: [
				{
					model: SubCategory,
					attributes: ["id", "name", "slug", "categoryId"],
					include: [{ model: Category, attributes: ["id", "name", "slug"] }],
				},
				{
					model: ProductImage,
					attributes: ["imageUrl"],
				},
				{
					model: ProductRating,
					attributes: ["rating"],
				},
			],
		});

		res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

exports.getProductNumber = async (req, res, next) => {
	try {
		const total = await Product.count();
		res.status(200).json({ total });
	} catch (error) {
		next(error);
	}
};

exports.getOneProduct = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const product = await Product.findOne({
			where: { slug },
			attributes: [
				"id",
				"title",
				"slug",
				"price",
				"quantity",
				"sold",
				"description",
				"color",
				"brand",
				"createdAt",
				"updatedAt",
			],
			order: [["createdAt", "DESC"]],
			include: [
				{
					model: SubCategory,
					attributes: ["id", "name", "slug", "categoryId"],
					include: [{ model: Category, attributes: ["id", "name", "slug"] }],
				},
				{
					model: ProductImage,
					attributes: ["imageUrl"],
				},
				{
					model: ProductRating,
					attributes: ["rating"],
				},
			],
		});
		res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

exports.createProduct = async (req, res, next) => {
	try {
		const {
			title,
			subCategoryId,
			price,
			quantity,
			description,
			color,
			brand,
			images,
		} = req.body;
		if (
			!(
				title &&
				subCategoryId &&
				price &&
				quantity &&
				description &&
				color &&
				brand
			)
		) {
			return res.status(400).json({ message: "Please complete the form" });
		}
		let sub = await SubCategory.findOne({ where: { id: subCategoryId } });
		if (!sub) {
			return res
				.status(400)
				.json({ message: "Subcategory with this id does not exist." });
		}
		let product = await Product.findOne({ where: { title } });
		if (product) {
			return res
				.status(400)
				.json({ message: "Product with this name already exists." });
		}
		product = await Product.create({
			title,
			slug: slugify(title),
			subCategoryId,
			price,
			quantity,
			description,
			color,
			brand,
		});
		if (images.length > 0) {
			for (let i = 0; i < images.length; i++) {
				await ProductImage.create({
					productId: product.id,
					imageUrl: images[i].imageUrl,
				});
			}
			const uploadedImages = await ProductImage.findAll({
				where: { productId: product.id },
			});

			product = { ...product, images: uploadedImages };
		}

		res.status(201).json(product);
	} catch (error) {
		next(error);
	}
};

exports.updateProduct = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const {
			title,
			subCategoryId,
			price,
			quantity,
			description,
			color,
			brand,
			images,
		} = req.body;
		let product = await Product.findOne({
			where: { slug },
		});
		if (!product) {
			res.status(400).json({ message: "this product does not exist" });
		}
		product.update({
			title,
			slug: slugify(title),
			subCategoryId,
			price,
			quantity,
			description,
			color,
			brand,
			images,
		});
		await ProductImage.destroy({ where: { productId: product.id } });
		if (images.length > 0) {
			for (let i = 0; i < images.length; i++) {
				await ProductImage.create({
					productId: product.id,
					imageUrl: images[i].imageUrl,
				});
			}
			const uploadedImages = await ProductImage.findAll({
				where: { productId: product.id },
			});

			product = { ...product, images: uploadedImages };
		}
		res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

exports.deleteProduct = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const product = await Product.findOne({ where: { slug } });
		if (!product) {
			return res.status(400).json({ message: "This product not found" });
		}
		await ProductImage.destroy({ where: { productId: product.id } });
		await ProductRating.destroy({ where: { productId: product.id } });
		await CartItem.destroy({ where: { productId: product.id } });
		await product.destroy();
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};

exports.rateProduct = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const { star } = req.body;
		const user = await User.findOne({ where: { id: req.user.id } });
		///check if the guy bought the product
		const product = await Product.findOne({ where: { slug } });
		if (!product) {
			return res.status(400).json({ message: "This product not found" });
		}
		let rating = await ProductRating.findOne({
			where: { productId: product.id, userId: user.id },
		});
		if (!rating) {
			rating = await ProductRating.create({
				userId: user.id,
				productId: product.id,
				rating: star,
			});
		} else {
			rating.update({ rating: star });
		}
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};

exports.getOneProductRating = async (req, res, next) => {
	try {
		const { slug } = req.params;
		console.log(req.user.id);
		const user = await User.findOne({ where: { id: req.user.id } });
		///check if the guy bought the product
		const product = await Product.findOne({ where: { slug } });
		if (!product) {
			return res.status(400).json({ message: "This product not found" });
		}

		let rating = await ProductRating.findOne({
			where: { productId: product.id, userId: user.id },
		});
		if (!rating) {
			return res.status(200).json({ star: 0 });
		}
		res.status(200).json(rating);
	} catch (error) {
		next(error);
	}
};

exports.getRelatedProducts = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const product = await Product.findOne({ where: { slug } });
		if (!product) {
			return res.status(400).json({ message: "This product not found" });
		}
		const related = await Product.findAll({
			where: { subCategoryId: product.subCategoryId },
			include: [
				{
					model: ProductImage,
					attributes: ["imageUrl"],
				},
				{
					model: ProductRating,
					attributes: ["rating"],
				},
			],
		});
		res.status(200).json(related);
	} catch (error) {
		next(error);
	}
};

exports.getProductsBySearch = async (req, res, next) => {
	try {
		const { text } = req.body;
		console.log(req.body);
		const cat = await Category.findAll({
			where: {
				name: {
					[Op.substring]: text,
				},
			},
		});
		const sub = await SubCategory.findAll({
			where: {
				[Op.or]: [
					{
						name: {
							[Op.substring]: text,
						},
					},
					{ categoryId: cat.map(item => item.id) },
				],
			},
		});

		const filtered = await Product.findAll({
			where: {
				[Op.or]: [
					{
						title: {
							[Op.substring]: text,
						},
					},
					{
						brand: {
							[Op.substring]: text,
						},
					},
					{ subCategoryId: sub.map(item => item.id) },
				],
			},
			include: [
				{
					model: ProductImage,
					attributes: ["imageUrl"],
				},
				{
					model: ProductRating,
					attributes: ["rating"],
				},
			],
		});

		res.status(200).json(filtered);
	} catch (error) {
		next(error);
	}
};

exports.getProductsByFilter = async (req, res, next) => {
	try {
		const { text, categoryId, brand, min = 0, max = 99999 } = req.body;
		console.log(req.body);

		const sub = await SubCategory.findAll({
			where: {
				categoryId,
			},
		});

		const filtered = await Product.findAll({
			where: {
				price: { [Op.gte]: min, [Op.lte]: max },
				brand: brand,
				subCategoryId: sub.map(item => item.id),
			},
			include: [
				{
					model: ProductImage,
					attributes: ["imageUrl"],
				},
				{
					model: ProductRating,
					attributes: ["rating"],
				},
			],
		});

		res.status(200).json(filtered);
	} catch (error) {
		next(error);
	}
};

exports.getProductBrands = async (req, res, next) => {
	try {
		const brands = await Product.findAll({ attributes: ["brand"] });
		res.status(200).json(brands.map(item => item.brand));
	} catch (error) {
		next(error);
	}
};
