const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const PDFDocument = require("pdfkit");

const Order = require("../models/order");
const Rental = require("../models/rental");
const User = require("../models/user");

//Create new Order entry
const addOrder = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ msg: "Invalid inputs, please check your data." });
  }

  const { firstName, lastName, startDate, endDate, rental, customer } = req.body;

  let user;
  try {
    user = await User.findById(customer);
  } catch (err) {
    console.errors(err.message);
    return res.status(500).send({ msg: "Server Error" });
  }

  if (user.suspended) {
    return res.status(500).send({ msg: "User is Suspended" });
  }

  if (!user) {
    return res.status(404).json({ msg: "Could not find user for this id." });
  }

  let searchedRental;
  try {
    searchedRental = await Rental.findById(rental);
  } catch (err) {
    console.errors(err.message);
    return res.status(500).send({ msg: "Server Error" });
  }

  if (!searchedRental) {
    return res.status(404).json({ msg: "Could not find rental for this id." });
  }

  //Calculate days and a total price for that order
  const days = Math.abs(endDate.getDate() - startDate.getDate());
  const price = days * searchedRental.price;

  const order = new Order({
    firstName,
    lastName,
    startDate,
    endDate,
    totalDays: days,
    totalPrice: price,
    fixedPrice: price,
    name: searchedRental.name,
    rentalmodel: searchedRental.rentalmodel,
    image: searchedRental.image,
    isPayNow: false,
    rental,
    customer,
  });

  try {
    //Start Transaction
    await order.save();
    //Push order in Users orders array
    user.orders.push(order);
    await user.save();
    //Decrement avaliable rentals by one
    const newRental = await Rental.findByIdAndUpdate(
      { _id: order.rental },
      { $inc: { qt: -1 } }
    );
    await newRental.save();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ msg: "Server Error, could not create that order" });
  }

  return res.status(201).json({ order: order });
};

//Get all users order
const getUsersOrders = async (req, res) => {
  let orderByUser;
  try {
    orderByUser = await User.findById(req.params.id).populate("orders");
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send({ msg: "Server Error, could not find orders for that user" });
  }

  if (!orderByUser || orderByUser === 0) {
    return res.status(404).json({ msg: "Could not find orders for this id." });
  }

  res.json({
    orders: orderByUser.orders.map((order) =>
      order.toObject({ getters: true })
    ),
  });
};

const getOrderById = async (req, res) => {
  let orderById;
  try {
    orderById = await Order.findById(req.params.id);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send({ msg: "Server Error, could not find order for that id" });
  }

  if (!orderById) {
    return res.status(404).json({ msg: "Order not found" });
  }

  res.json({ order: orderById.toObject({ getters: true }) });
};

//Delete order
const deleteOrder = async (req, res) => {
  let orederToDelete;
  try {
    orederToDelete = await Order.findById(req.params.id)
      .populate("customer")
      .populate("rental");
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({ msg: "Server Error, could not delete order" });
  }
  if (!orederToDelete) {
    return res.status(404).json({ msg: "Could not find order for this id" });
  }
  if(orederToDelete.isPayNow){
    return res.status(500).json({msg:"Cannot as it is paid"})
  }


  try {
    //Increment rental qt field +1 when the rental is back (order is deleted)
    const newRental = await Rental.findByIdAndUpdate(
      { _id: orederToDelete.rental._id },
      { $inc: { qt: 1 } }
    );
    await newRental.save();
    await orederToDelete.remove();
    orederToDelete.customer.orders.pull(orederToDelete);
    await orederToDelete.customer.save();
   } catch (err) {
    console.error("Error ",err.message);
    return res.status(500).send({ msg: "Server Error, could not delete order" });
  }

  res.status(200).json({ msg: "Order Deleted." });
};

//Update single order price
const updatePayOption = async (req, res) => {
  const { isPayNow } = req.body;

  let orderToUpdate;
  try {
    orderToUpdate = await Order.findById(req.params.id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "Server Error, could not find order" });
  }

  if (!orderToUpdate) {
    return res.status(404).json({ msg: "Could not find order for this id" });
  }

  //Fixed price field where we save old price
  let fixedPrice = orderToUpdate.fixedPrice;
  let newTotalPrice = orderToUpdate.totalPrice;
  try {
    if (isPayNow) {
      //10% off the price when pay now
      orderToUpdate.totalPrice = newTotalPrice - (newTotalPrice / 100) * 10;
    } else {
      orderToUpdate.totalPrice = fixedPrice;
    }
    orderToUpdate.isPayNow = isPayNow;
    await orderToUpdate.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "Server Error, could not update order" });
  }

  res.status(200).json({ order: orderToUpdate.toObject({ getters: true }) });
};



exports.addOrder = addOrder;
exports.deleteOrder = deleteOrder;
exports.getUsersOrders = getUsersOrders;
exports.getOrderById = getOrderById;
exports.updatePayOption = updatePayOption;