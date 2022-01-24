const { SubCategory } = require("../models");
const slugify = require("slugify");
exports.getAllSubCategory = async (req, res, next) => {
	try {
		const subCategories = await SubCategory.findAll({
			order: [["createdAt", "DESC"]],
		});
		res.status(200).json(subCategories);
	} catch (error) {
		next(error);
	}
};
exports.getOneSubCategory = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const subCategory = await SubCategory.findOne({ where: { slug } });
		if (!subCategory) {
			return res.status(400).json({ message: "Sub-category not found." });
		}
	} catch (error) {
		next(error);
	}
};
exports.createSubCategory = async (req, res, next) => {
	try {
		const { name } = req.body;
		let subCategory = await SubCategory.findOne({ where: { name } });
		if (subCategory) {
			return res
				.status(400)
				.json({ message: "Sub-category with this name already exists." });
		}
		subCategory = await SubCategory.create({ name, slug: slugify(name) });
		res.status(201).json(subCategory);
	} catch (error) {
		next(error);
	}
};
exports.updateSubCategory = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const { name } = req.body;
		const subCategory = await SubCategory.findOne({ where: { slug } });
		if (!subCategory) {
			return res.status(400).json({ message: "Sub-category not found." });
		}
		newCategory = await subCategory.update({ name, slug: slugify(name) });
		res.status(200).json(newCategory);
	} catch (error) {
		next(error);
	}
};
exports.deleteSubCategory = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const subCategory = await SubCategory.findOne({ where: { slug } });
		if (!subCategory) {
			return res.status(400).json({ message: "Sub-category not found." });
		}
		await subCategory.destroy();
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};
