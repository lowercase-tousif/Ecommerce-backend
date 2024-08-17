const express = require("express");
const userModel = require("../model/userModel");
const router = express.Router();
const createError = require("http-errors");
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

    // no password return
    const options = { password: 0 };

    const users = await userModel
      .find(filter, options)
      .limit(limit)
      .skip((page - 1) * limit);

    // total number of documents
    const count = await userModel.find(filter, options).countDocuments();

    // If no users found then
    if (!users) throw createError(404, "no users found");

    res.status(200).json({
      message: "User fetched",
      users: users,
      pagination: {
        totalPage: Math.ceil(count / limit),
        currentPage: page,
        prevPage: page - 1 > 0 ? page - 1 : null,
        nextPage: page - 1 > 0 ? page + 1 : null,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
