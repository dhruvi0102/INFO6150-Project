const ConnectDB = require("../db");
const Car = require("../models/car");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { carData, userData } = require("./data");

ConnectDB();

const createCar = async (data) => {
  try {
    const car = await new Car(data).save();
    console.log(car);
    console.log("------");
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const user = await new User({ ...data, password: hashedPassword }).save();
    console.log(user);
    console.log("------");
  } catch (error) {
    // console.log(error);
  }
};

const fillData = async () => {
  for (var i = 0; i < carData.length; i++) {
    await createCar(carData[i]);
    await createUser(userData[i]);
  }
  console.log("Data Added Successfully");
  mongoose.connection.close();
};

fillData();