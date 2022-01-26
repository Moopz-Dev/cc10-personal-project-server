const {
	Category,
	Product,
	SubCategory,
	ProductImage,
	CartItem,
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
			],
		});

		res.status(200).json(products);
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
		await CartItem.destroy({ where: { productId: product.id } });
		await product.destroy();
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};
