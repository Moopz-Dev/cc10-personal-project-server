const { Product, SubCategory } = require("../models");
const slugify = require("../config/slugify");

exports.getAllProduct = async (req, res, next) => {
	try {
		const products = await Product.findAll();
		res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

exports.getOneProduct = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

exports.createProduct = async (req, res, next) => {
	try {
		const { title, subCategoryId, price, quantity, description, color, brand } =
			req.body;
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
		res.status(201).json(product);
	} catch (error) {
		next(error);
	}
};

exports.updateProduct = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

exports.deleteProduct = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
