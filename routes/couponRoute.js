const express = require("express");
const couponController = require("../controllers/couponController");
const { authenticateAdmin } = require("../middlewares/authenticate");
const router = express.Router();

//coupon endpoints

router.get("/coupon", couponController.getCoupon);

router.post("/coupon", authenticateAdmin, couponController.createCoupon);
router.delete("/coupon/:id", authenticateAdmin, couponController.deleteCoupon);

module.exports = router;
