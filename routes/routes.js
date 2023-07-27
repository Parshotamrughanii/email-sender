const router = require("express").Router();
const { feedback } = require("../controller/controller");

// HTTP Request
router.post("/feedback", feedback);

module.exports = router;
