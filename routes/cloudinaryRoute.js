const express = require("express");
const { authenticateAdmin } = require("../middlewares/authenticate");
const cloudinaryController = require("../controllers/cloudinaryController");

const router = express.Router();

//category endpoints

router.post("/uploadimages", authenticateAdmin, cloudinaryController.upload);
router.post("/removeimages", authenticateAdmin, cloudinaryController.remove);

module.exports = router;
