const express = require("express");
const { sendMail } = require("../controllers/mailController");

const router = express.Router();

router.get("", sendMail);


module.exports = router;