const express = require("express");
const stripeController = require("../controllers/stripeController");
const { authenticateUser } = require("../middlewares/authenticate");
const router = express.Router();

//coupon endpoints

router.post(
	"/create-payment-intent",
	authenticateUser,
	stripeController.createPaymentIntent
);

module.exports = router;
