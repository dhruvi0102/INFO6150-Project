const crypto = require("crypto");
const { validationResult } = require("express-validator");

const User = require("../models/user");
const Order = require("../models/order");
const { sendEmail, sendPasswordResetEmail } = require("../utils/Email");

//Send invoice by checkout
const sendInvoiceEmail = async (req, res) => {
  const { orderId } = req.body;
  let user;
  try {
    user = await User.findById(req.params.id).populate("orders");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ msg: "Server Error, could not find a user with that id" });
  }

  if (!user) {
    return res.status(403).json({ msg: "No users account with that id" });
  }

  let emailOrder;
  try {
    emailOrder = await Order.findById({ _id: orderId });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "We can not send that e-mail" });
  }

  if (!emailOrder) {
    return res.json({ msg: "No order with this id" });
  }

  const firstName = emailOrder.firstName;
  const lastName = emailOrder.lastName;
  const totalPrice = emailOrder.totalPrice.toFixed(2);
  const carName = emailOrder.name;
  const carModel = emailOrder.model;
  const startDate = new Date(emailOrder.startDate).toLocaleDateString("de-DE");
  const endDate = new Date(emailOrder.endDate).toLocaleDateString("de-DE");
  const totalDays = emailOrder.totalDays;
  const data = {
    firstName,
    lastName,
    totalPrice,
    carName,
    carModel,
    startDate,
    endDate,
    totalDays,
    to: user.email,
  };
  try {
    sendEmail(data);
    res.send("Email sent!");
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "We can not send that e-mail" });
  }
};

//Send reset passowrd link
const resetPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ msg: "Invalid input, please check your data" });
  }

  //Generate token
  let token;
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    token = buffer.toString("hex");
  });

  let user;
  try {
    user = await User.findOne({ email: req.body.email });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ msg: "Server Error, could not find a user with that email" });
  }

  if (!user) {
    return res.status(403).json({ msg: "No account with that e-mail" });
  }

  try {
    user.resetToken = token;
    //1h time exp time for generated token
    user.expToken = Date.now() + 3600000;
    await user.save();
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Server error, can not update user" });
  }


  
  try {
    sendPasswordResetEmail({
      to: req.body.email,
      token,
    });
    res.send("Email sent!");
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "We can not send that e-mail" });
  }
};

exports.sendInvoiceEmail = sendInvoiceEmail;
exports.resetPassword = resetPassword;