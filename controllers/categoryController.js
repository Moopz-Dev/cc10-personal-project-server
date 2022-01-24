const { Category } = require("../models");
const slugify = require("slugify");
exports.getAllCategory = async (req, res, next) => {
	try {
		const categories = await Category.findAll({
			order: [["createdAt", "DESC"]],
		});
		res.status(200).json(categories);
	} catch (error) {
		next(error);
	}
};
exports.getOneCategory = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const category = await Category.findOne({ where: { slug } });
		if (!category) {
			return res.status(400).json({ message: "Category not found." });
		}
		res.status(200).json(category);
	} catch (error) {
		next(error);
	}
};
exports.createCategory = async (req, res, next) => {
	try {
		const { name } = req.body;
		let category = await Category.findOne({ where: { name } });
		if (category) {
			return res
				.status(400)
				.json({ message: "Category with this name already exists." });
		}
		category = await Category.create({ name, slug: slugify(name) });
		res.status(201).json(category);
	} catch (error) {
		next(error);
	}
};
exports.updateCategory = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const { name } = req.body;
		const category = await Category.findOne({ where: { slug } });
		if (!category) {
			return res.status(400).json({ message: "Category not found." });
		}
		newCategory = await category.update({ name, slug: slugify(name) });
		res.status(200).json(newCategory);
	} catch (error) {
		next(error);
	}
};
exports.deleteCategory = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const category = await Category.findOne({ where: { slug } });
		if (!category) {
			return res.status(400).json({ message: "Category not found." });
		}
		await category.destroy();
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};
