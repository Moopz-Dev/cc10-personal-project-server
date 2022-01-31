const express = require("express");
const cartController = require("../controllers/cartController");
const { authenticateUser } = require("../middlewares/authenticate");
const router = express.Router();

//coupon endpoints

router.get("/cart/", authenticateUser, cartController.getCartItems);
router.post("/cart/:productId", authenticateUser, cartController.addCartItems);
router.patch("/cart/:id", authenticateUser, cartController.decreaseCartItems);
router.delete("/cart/:id", authenticateUser, cartController.deleteCartItems);

module.exports = router;
