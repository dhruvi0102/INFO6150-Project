const { validationResult } = require("express-validator");
const Booking = require("../models/booking");
const House = require("../models/house");
const User = require("../models/user");

// Add new booking for a house
const bookHouse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ msg: "Invalid inputs, please check your data." });
  }

  const { startDate, endDate, totalPrice, guests, message, house, guest } =
    req.body;

  const booking = new Booking({
    startDate,
    endDate,
    totalPrice,
    guests,
    message,
    house,
    guest,
  });

  try {
    await booking.save();
    // Additional operations if needed, such as updating house availability, user's bookings, etc.
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ msg: "Server Error, could not create that booking" });
  }

  return res.status(201).json({ booking });
};

// Get booking details for a specific house
const getHouseBookings = async (req, res) => {
  // Similar logic to fetch bookings for a specific house
};

// Get all bookings made by a user
const getUserBookings = async (req, res) => {
  // Similar logic to fetch bookings made by a specific user
};

// Cancel a booking for a house
const cancelBooking = async (req, res) => {
  // Similar logic to cancel a booking for a house
};

exports.bookHouse = bookHouse;
exports.getHouseBookings = getHouseBookings;
exports.getUserBookings = getUserBookings;
exports.cancelBooking = cancelBooking;
