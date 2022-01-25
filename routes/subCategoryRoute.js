const express = require("express");
const subCategoryController = require("../controllers/subCategoryController");
const { authenticateAdmin } = require("../middlewares/authenticate");
const router = express.Router();

//subCategory endpoints

router.get("/sub", subCategoryController.getAllSubCategory);
router.get("/sub/:slug", subCategoryController.getOneSubCategory);

router.post("/sub", authenticateAdmin, subCategoryController.createSubCategory);
router.put(
	"/sub/:slug",
	authenticateAdmin,
	subCategoryController.updateSubCategory
);
router.delete(
	"/sub/:slug",
	authenticateAdmin,
	subCategoryController.deleteSubCategory
);

module.exports = router;
