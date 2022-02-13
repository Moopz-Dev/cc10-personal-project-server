const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const {
	authenticateUser,
	authenticateAdminOrUser,
} = require("../middlewares/authenticate");
const router = express.Router();

//register & login
router.post("/register", authController.register);
router.post("/login", authController.login);

//get current user
router.get("/user/me", authenticateAdminOrUser, authController.getMe);

//user address
// router.put("/user/address", authenticateUser, userController.updateUserAddress);
// router.get("/user/address", authenticateUser, userController.getUserAddress);

//coupon
router.post("/user/cart/coupon", authenticateUser, userController.applyCoupon);

//orders
router.post("/user/order", authenticateUser, userController.createOrder);
router.get("/user/order", authenticateUser, userController.getOrders);
router.delete("/user/order/:id", authenticateUser, userController.cancelOrder);
router.patch(
	"/user/order:id",
	authenticateUser,
	userController.updateOrderPayment
);
// router.post("/user/order/coupon", authenticateUser, userController.useCoupon);

module.exports = router;
