const express = require("express");
const { seedUser } = require("../controller/seedController");
const router = express.Router();

router.get("/userSubmit", seedUser);

module.exports = router;
