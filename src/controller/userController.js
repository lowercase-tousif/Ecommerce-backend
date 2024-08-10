const express = require("express");
const users = require("../model/userModel");
const router = express.Router();

const getUsers = (req, res, next) => {
  res.status(200).json({
    message: "User fetched",
    users: users,
  });
};

module.exports = getUsers;
