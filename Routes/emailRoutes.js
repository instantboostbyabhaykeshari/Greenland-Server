const express = require("express");
const { sendMail } = require("../Controller/sendMail");
const router = express.Router();


router.post("/sendEmail", sendMail);

module.exports = router;