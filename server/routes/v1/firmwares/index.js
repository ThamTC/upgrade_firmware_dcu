const express = require("express");
const router = express.Router();

router.use("/", require("./firmware.route"));
router.use("/update", require("./firmware.route"));

module.exports = router;