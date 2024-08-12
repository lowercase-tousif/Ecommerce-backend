require("dotenv").config();
const port = process.env.PORT || 3001;
const imagePath =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
module.exports = { port, imagePath };
