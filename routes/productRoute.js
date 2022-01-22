const express = require("express");
const productController = require("../controllers/productController");
const { authenticateAdmin } = require("../middlewares/authenticate");
const router = express.Router();

//product endpoints

router.get("/product", productController.getAllProduct);
router.get("/product/:id", productController.getOneProduct);

router.post("/product", authenticateAdmin, productController.createProduct);
router.put("/product/:id", authenticateAdmin, productController.updateProduct);
router.delete(
	"/product/:id",
	authenticateAdmin,
	productController.deleteProduct
);

module.exports = router;
