const { default: mongoose } = require("mongoose");
const { mongoURL } = require("../secret");

const connectDB = async (options) => {
  try {
    await mongoose.connect(mongoURL, options);
    console.log("Connected to DB....");
    mongoose.connection.on("error", (error) => {
      console.log("Connection to the DB error .... ");
    });
  } catch (error) {
    console.error("Could not connect to DB: ", error.toString());
  }
};

module.exports = connectDB;
