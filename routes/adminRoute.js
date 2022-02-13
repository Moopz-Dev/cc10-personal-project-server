const express = require("express");
const adminController = require("../controllers/adminController");
const { authenticateAdmin } = require("../middlewares/authenticate");
const router = express.Router();

//orders endpoints
router.get("/admin/order", authenticateAdmin, adminController.getOrders);
router.put("/admin/order/:id", authenticateAdmin, adminController.updateOrder);
router.put(
	"/admin/ordertrack/:id",
	authenticateAdmin,
	adminController.updateTracking
);

module.exports = router;
