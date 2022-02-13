const express = require("express");
const { authenticateAdminOrUser } = require("../middlewares/authenticate");
const cloudinaryController = require("../controllers/cloudinaryController");

const router = express.Router();

//category endpoints

router.post(
	"/uploadimages",
	authenticateAdminOrUser,
	cloudinaryController.upload
);
router.post(
	"/removeimages",
	authenticateAdminOrUser,
	cloudinaryController.remove
);

module.exports = router;
