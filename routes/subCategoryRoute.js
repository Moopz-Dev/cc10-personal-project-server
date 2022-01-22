const express = require("express");
const subCategoryController = require("../controllers/subCategoryController");
const { authenticateAdmin } = require("../middlewares/authenticate");
const router = express.Router();

//subCategory endpoints

router.get("/subCategory", subCategoryController.getAllSubCategory);
router.get("/subCategory/id", subCategoryController.getOneSubCategory);

router.post(
	"/subCategory",
	authenticateAdmin,
	subCategoryController.createSubCategory
);
router.put(
	"/subCategory:id",
	authenticateAdmin,
	subCategoryController.updateSubCategory
);
router.delete(
	"/subCategory/:id",
	authenticateAdmin,
	subCategoryController.deleteSubCategory
);

module.exports = router;
