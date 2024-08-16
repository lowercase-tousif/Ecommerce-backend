require("dotenv").config();
const port = process.env.PORT;
const imagePath =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
const mongoURL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/restShopping";
module.exports = { port, imagePath, mongoURL };
