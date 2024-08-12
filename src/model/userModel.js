const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minLength: [6, "Minimum 6 characters"],
      maxLenth: [10, "Maximum 10 characters"],
    },
    email: {
      type: String,
      required: [true, "User email required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (e) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
        },
        message: "Enter a valid email",
      },
    },

    password: {
      type: String,
      minLength: [8, "Minimum 8 characters"],
      set: (e) => bcrypt.hashSync(e, bcrypt.genSaltSync(11)),
    },
    image: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    phone: {
      type: String,
      required: [true, "Number is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
