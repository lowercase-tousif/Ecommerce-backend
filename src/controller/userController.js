const express = require("express");
const userModel = require("../model/userModel");
const router = express.Router();

const getUsers = async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      message: "User fetched",
      users: users,
    });
  } catch (error) {
    next(error);
  }



};

module.exports = getUsers;
