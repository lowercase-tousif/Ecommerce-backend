const data = require("../data");
const userModel = require("../model/userModel");

const seedUser = async (req, res, next) => {
  try {
    // Delete  all existing users
    await userModel.deleteMany({});

    // Inserting newUsers
    const users = await userModel.insertMany(data.users);

    //successful  response
    return res.status(200).json({
      message: "Many users inserted",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { seedUsers };
