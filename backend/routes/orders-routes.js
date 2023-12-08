const express = require("express");
const { check } = require("express-validator");
const { verifyJWT } = require("../utils/UserAuth");
const houseBookingController = require("../controllers/house-booking-controllers");
const router = express.Router();

// Add new booking for a house
router.post(
  "/",
  [
    check("startDate", "Please enter a valid start date").isISO8601().toDate(),
    check("endDate", "Please enter a valid end date").isISO8601().toDate(),
    check("totalPrice", "Please enter a valid total price").isNumeric(),
    check("guests", "Please enter a valid number of guests").isInt({ min: 1 }),
    // Other validation checks as needed
  ],
  houseBookingController.bookHouse
);

// Get booking details for a specific house
router.get("/house/:houseId", houseBookingController.getHouseBookings);

// Get all bookings made by a user
router.get("/user/:userId", houseBookingController.getUserBookings);

// Cancel a booking for a house
router.patch("/cancel/:bookingId", houseBookingController.cancelBooking);

module.exports = router;


