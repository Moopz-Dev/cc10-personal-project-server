const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const { authenticateUser } = require("../middlewares/authenticate");
const router = express.Router();

//register & login
router.post("/register", authController.register);
router.post("/login", authController.login);

//get current user
router.get("/user/me", authenticateUser, authController.getMe);

//user endpoints
router.post("/user/cart", authenticateUser, userController.addCartItem);
router.get("/user/cart", authenticateUser, userController.getCartItem);
router.delete("/user/cart", authenticateUser, userController.removeCartItem);

router.post("/user/address", authenticateUser, userController.changeAddress);
router.post("/user/order", authenticateUser, userController.createOrder);
router.get("/user/order", authenticateUser, userController.getOrders);
router.post("/user/order/coupon", authenticateUser, userController.useCoupon);

module.exports = router;
