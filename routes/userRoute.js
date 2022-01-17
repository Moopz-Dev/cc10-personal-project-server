const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const {
	authenticateUser,
	authenticateAdmin,
} = require("../middlewares/authenticate");
const router = express.Router();

//register & login
router.post("/register", authController.register);
router.post("/login", authController.login);

//user endpoints
router.post("/user/cart", userController.addCartItem);
router.get("/user/cart", userController.getCartItem);
router.delete("/user/cart", userController.removeCartItem);

router.post("/user/address", userController.changeAddress);
router.post("/user/order", userController.createOrder);
router.get("/user/orders", userController.getOrders);
router.post("/user/order/coupon", userController.useCoupon);

module.exports = router;
