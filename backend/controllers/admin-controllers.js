const AdminUser = require("../models/admins");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const Car = require("../models/car");
const User = require("../models/user");

require("dotenv").config();

const addAdmins = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ msg: "Invalid input, please check your data" });
    }

    const { name, email, password } = req.body;

    let user;
    try {
      user = await AdminUser.findOne({ email });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Server Error" });
    }

    if (user) {
      return res
        .status(422)
        .json({ msg: "User already exists, please login instead." });
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ msg: "Server Error" });
    }

    user = new AdminUser({
      name,
      email,
      password: hashedPassword,
      resetToken: "",
      expToken: "",
      orders: [],
    });

    try {
      await user.save();
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Server Error" });
    }

    let token;
    try {
      token = jwt.sign({ userId: user.id, name: user.name }, "ABCD", {
        expiresIn: "1y",
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Server Error" });
    }

    res.status(201).json({ userId: user.id, name: user.name, token: token });
  } catch (error) {
    console.log(error);
    res.status(406).json({ error: error });
  }
};

const addCars = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ msg: "Invalid inputs, please check your data." });
  }

  const { name, model, carType, seats, gears, clima, price, qt, image } =
    req.body;
  try {
    const car = new Car({
      name,
      model,
      carType,
      seats,
      gears,
      clima,
      price,
      image,
      qt,
    });

    const newCar = await car.save();
    res.status(201).json({ car: newCar });
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send({ msg: "Creating a new car entry failed, please try again" });
  }
};

const blockUser = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findOne({ _id: userId });
    if (user === null) {
      throw new Error("User Not Found");
    }

    if (!user.suspended) {
      user.suspended = true;
    } else {
      user.suspended = false;
    }
    await user.save();
    res.status(201).json({ message: "Toggle Successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error.message });
  }
};

const loginAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ msg: "Invalid input, please check your data" });
  }

  const { email, password } = req.body;

  let user;
  try {
    user = await AdminUser.findOne({ email });
  } catch (err) {
    console.errors(err.message);
    res.status(500).send({ msg: "Server Error" });
  }

  if (!user) {
    return res
      .status(403)
      .json({ msg: "Invalid credentials, could not log you in." });
  }

  let isPasswordMatch = false;
  try {
    isPasswordMatch = await bcrypt.compare(password, user.password);
  } catch (err) {
    console.errors(err.message);
    res.status(500).send({ msg: "Server Error" });
  }
  if (!isPasswordMatch) {
    return res
      .status(403)
      .json({ msg: "Invalid credentials, could not log you in." });
  }

  let token;
  try {
    token = jwt.sign({ userId: user.id, name: user.name }, "ABCD", {
      expiresIn: "1h",
    });
  } catch (err) {
    console.errors(err.message);
    res.status(500).send({ msg: "Server Error" });
  }

  res.json({ userId: user.id, name: user.name, token: token });
};

const getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.json({ users: data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
};

module.exports = {
  loginAdmin: loginAdmin,
  addAdmins: addAdmins,
  addCars: addCars,
  blockUser: blockUser,
  getAllUsers: getAllUsers,
};
