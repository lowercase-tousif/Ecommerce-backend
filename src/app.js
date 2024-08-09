const express = require("express");
const app = express();

// basic route
app.get("/", (req, res, next) => {
  res.send("<h1>Server is running</h1>");
});

module.exports = app;
