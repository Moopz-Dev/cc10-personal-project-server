const express = require("express");
const productController = require("../controllers/productController");
const {
	authenticateAdmin,
	authenticateUser,
} = require("../middlewares/authenticate");
const router = express.Router();

//product endpoints

router.get("/products/:count", productController.getSomeProduct);
router.get("/product/total", productController.getProductNumber);
router.get("/product/:slug", productController.getOneProduct);
router.post("/products/", productController.getAllProduct);

router.post("/product", authenticateAdmin, productController.createProduct);
router.put(
	"/product/update/:slug",
	authenticateAdmin,
	productController.updateProduct
);
router.delete(
	"/product/delete/:slug",
	authenticateAdmin,
	productController.deleteProduct
);

router.put(
	"/product/star/:slug",
	authenticateUser,
	productController.rateProduct
);

router.get(
	"/star/:slug",
	authenticateUser,
	productController.getOneProductRating
);

router.get("/related-products/:slug", productController.getRelatedProducts);

module.exports = router;
