const express = require("express");
const categoryController = require("../controllers/categoryController");
const { authenticateAdmin } = require("../middlewares/authenticate");
const router = express.Router();

//category endpoints

router.get("/category", categoryController.getAllCategory);
router.get("/category/:id", categoryController.getOneCategory);
// router.get("/category/:id", categoryController.getSubCategory);

router.post("/category", authenticateAdmin, categoryController.createCategory);
router.put(
	"/category/:id",
	authenticateAdmin,
	categoryController.updateCategory
);
router.delete(
	"/category/:id",
	authenticateAdmin,
	categoryController.deleteCategory
);

module.exports = router;
