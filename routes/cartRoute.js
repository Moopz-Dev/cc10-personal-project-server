const express = require("express");
const cartController = require("../controllers/cartController");
const { authenticateUser } = require("../middlewares/authenticate");
const router = express.Router();

//coupon endpoints

router.get("/cart/", authenticateUser, cartController.getCartItems);
router.post("/cart/:productId", authenticateUser, cartController.addCartItems);
router.put("/cart/:id", authenticateUser, cartController.updateCartItems);
router.delete("/cart/:id", authenticateUser, cartController.deleteCartItems);
router.delete("/carts/clear", authenticateUser, cartController.emptyCartItems);

module.exports = router;
