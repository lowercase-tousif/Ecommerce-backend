const express = require("express");
const userModel = require("../model/userModel");
const router = express.Router();

const getUsers = async (req, res, next) => {
  try {
    // Pagination and Search
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    // Regular Expression to get users
    const searchRegularExpression = new RegExp(".*" + search + ".*", "i");

    // Filter
    const filter = {
      isAdmin: { $ne: true },
      $or: [
        { name: { $regex: searchRegularExpression } },
        { email: { $regex: searchRegularExpression } },
        { phone: { $regex: searchRegularExpression } },
      ],
    };

    const users = await userModel.find(filter);
    res.status(200).json({
      message: "User fetched",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
