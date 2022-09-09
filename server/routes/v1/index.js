const express = require("express");
const router = express.Router();

router.use("/firmware", require("./firmwares"));

module.exports = router;