const express = require("express");
const getUsers = require("../controller/userController");
const router = express.Router();

router.get("/userlist", getUsers);

module.exports = router;
