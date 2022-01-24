const express = require("express");
const subCategoryController = require("../controllers/subCategoryController");
const { authenticateAdmin } = require("../middlewares/authenticate");
const router = express.Router();

//subCategory endpoints

router.get("/subCategory", subCategoryController.getAllSubCategory);
router.get("/subCategory/:slug", subCategoryController.getOneSubCategory);

router.post(
	"/subCategory",
	authenticateAdmin,
	subCategoryController.createSubCategory
);
router.put(
	"/subCategory:slug",
	authenticateAdmin,
	subCategoryController.updateSubCategory
);
router.delete(
	"/subCategory/:slug",
	authenticateAdmin,
	subCategoryController.deleteSubCategory
);

module.exports = router;
