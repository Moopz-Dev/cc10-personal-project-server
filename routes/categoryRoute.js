const express = require("express");
const categoryController = require("../controllers/categoryController");
const { authenticateAdmin } = require("../middlewares/authenticate");
const router = express.Router();

//category endpoints

router.get("/category", categoryController.getAllCategory);
router.get("/category/:slug", categoryController.getOneCategory);
router.get("/category/sub/:id", categoryController.getCategorySub);

router.post("/category", authenticateAdmin, categoryController.createCategory);
router.put(
	"/category/:slug",
	authenticateAdmin,
	categoryController.updateCategory
);
router.delete(
	"/category/:slug",
	authenticateAdmin,
	categoryController.deleteCategory
);

module.exports = router;
