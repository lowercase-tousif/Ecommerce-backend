const express = require("express");
const app = express();
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

// Self made middlewares
const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 7,
  message: "<h1>Too many requests from this IP. Please try again later</h1>",
});

// Using middlewares
app.use(morgan("dev"));
app.use(rateLimiter);
app.use(xssClean());

// basic route
app.get("/", (req, res, next) => {
  res.send("<h1>Server is running</h1>");
});

module.exports = app;
