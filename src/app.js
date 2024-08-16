const express = require("express");
const app = express();
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
// All routes imports here
const userRoute = require("./routes/userRoute");
const seedRoute = require("./routes/seedRouter");

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// userlist route Demo
app.use("/api/user", userRoute);
app.use("/seedUser", seedRoute);

// basic route
app.get("/", (req, res, next) => {
  res.send("<h1>Server is running</h1>");
});

// client Error handling
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

// server error handling
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
