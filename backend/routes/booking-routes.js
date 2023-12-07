const express = require("express");
const { check } = require("express-validator");
const { verifyJWT } = require("../utils/UserAuth");
const bookingController = require("../controllers/booking-controllers");
const router = express.Router();

// Add new booking
router.post(
  "/",
  [
    // Validation checks for the incoming data
    check("startDate", "Please enter a valid start date").isISO8601().toDate(),
    check("endDate", "Please enter a valid end date").isISO8601().toDate(),
    check("totalPrice", "Please enter a valid total price").isNumeric(),
    check("guests", "Please enter a valid number of guests").isInt({ min: 1 }),
    // Other validation checks as needed
  ],
  bookingController.addBooking
