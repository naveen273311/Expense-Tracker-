const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      "mongodb+srv://Naveen:Naveen@cluster0.7hzpyfb.mongodb.net/"
    );
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { db };
