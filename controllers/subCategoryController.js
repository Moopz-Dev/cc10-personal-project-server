const { SubCategory, Category } = require("../models");
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
		res.status(200).json(subCategory);
	} catch (error) {
		next(error);
	}
};
exports.createSubCategory = async (req, res, next) => {
	try {
		const { name, categoryId } = req.body;
		if (!categoryId) {
			return res.status(400).json({ message: "Please select a category." });
		}
		let category = await Category.findOne({ where: { id: categoryId } });
		if (!category) {
			return res
				.status(400)
				.json({ message: "Category with this id does not exist." });
		}
		let subCategory = await SubCategory.findOne({ where: { name } });
		if (subCategory) {
			return res
				.status(400)
				.json({ message: "Sub-category with this name already exists." });
		}
		subCategory = await SubCategory.create({
			name,
			slug: slugify(name),
			categoryId,
		});
		res.status(201).json(subCategory);
	} catch (error) {
		next(error);
	}
};
exports.updateSubCategory = async (req, res, next) => {
	try {
		const { slug } = req.params;
		const { name, categoryId } = req.body;
		if (!categoryId) {
			return res.status(400).json({ message: "Please select a category." });
		}
		let category = await Category.findOne({ where: { id: categoryId } });
		if (!category) {
			return res
				.status(400)
				.json({ message: "Category with this id does not exist." });
		}
		const subCategory = await SubCategory.findOne({ where: { slug } });
		if (!subCategory) {
			return res.status(400).json({ message: "Sub-category not found." });
		}
		newCategory = await subCategory.update({
			name,
			slug: slugify(name),
			categoryId,
		});
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
