const mongoose = require("mongoose");

require("dotenv").config();

//Connect to DB
const ConnectDB = async () => {
  //MongoDB URI saved in .env
  const db = "mongodb://localhost:27017/temp";

  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      retryWrites: false,
    });
    console.log("Connected to MongoDB successfuly!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;
