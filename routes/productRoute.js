const express = require("express");
const productController = require("../controllers/productController");
const { authenticateAdmin } = require("../middlewares/authenticate");
const router = express.Router();

//product endpoints

router.get("/products/:count", productController.getSomeProduct);
router.get("/product/total", productController.getProductNumber);
router.get("/product/:slug", productController.getOneProduct);
router.post("/products/", productController.getAllProduct);

router.post("/product", authenticateAdmin, productController.createProduct);
router.put(
	"/product/:slug",
	authenticateAdmin,
	productController.updateProduct
);
router.delete(
	"/product/:slug",
	authenticateAdmin,
	productController.deleteProduct
);

module.exports = router;
