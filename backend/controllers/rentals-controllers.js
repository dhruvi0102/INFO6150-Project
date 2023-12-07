const { validationResult } = require("express-validator");

const Rental = require("../models/rental");

// Create a rental entry
const postRental = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ msg: "Invalid inputs, please check your data." });
  }

  const {
    title,
    description,
    location,
    pricePerNight,
    capacity,
    amenities,
    image,
    rating,
    reviews,
    bookedDates,
  } = req.body;

  try {
    const rental = new Rental({
      title,
      description,
      location,
      pricePerNight,
      capacity,
      amenities,
      image,
      rating,
      reviews,
      bookedDates,
    });

    const newRental = await rental.save();
    res.status(201).json({ rental: newRental });
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send({ msg: "Creating a new rental entry failed, please try again" });
  }
};

// Get all rentals
const getAllRentals = async (req, res) => {
  let rentals;
  try {
    rentals = await Rental.find().sort({ pricePerNight: 1 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "Fetching houses failed, please try again" });
  }
  res.json({ houses: houses.map((house) => house.toObject({ getters: true })) });
};

// Get single rental by ID
const getRentalById = async (req, res) => {
  let rentalById;
  try {
    rentalById = await Rental.findById(req.params.id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "Cannot find this rental" });
  }
  if (!rentalById) {
    return res.status(404).json({ msg: "Rental not found" });
  }

  res.json({ rental: rentalById.toObject({ getters: true }) });
};

// Get 3 rentals  with lower price for Landing page
const getOfferRentals = async (req, res) => {
  let offerRentals;
  try {
    offerRentals = await Rental.find().sort({ pricePerNight: 1 }).limit(3);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "Fetching rentals failed, please try again" });
  }

  res.json({
    rentals: offerRentals.map((rental) => rental.toObject({ getters: true })),
  });
};

// Get rental list by searched title, description or location
const getRentalBySearch = async (req, res) => {
  let rentals;
  const searchStr = req.params.search;

  try {
    rentals = await Rental.find({
      $or: [
        { title: { $regex: searchStr, $options: "i" } },
        { description: { $regex: searchStr, $options: "i" } },
        { location: { $regex: searchStr, $options: "i" } },
      ],
    }).sort({ pricePerNight: 1 });

    console.log(req.params.search);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "Cannot find rentals with that search term" });
  }

  if (!rentals || rentals.length === 0) {
    return res.status(404).json({ msg: "Rentals not found" });
  }

  res.json({ rentals: rentals.map((house) => rental.toObject({ getters: true })) });
};

exports.postRental = postRental;
exports.getAllRentals = getAllRentals;
exports.getRentalById = getRentalById;
exports.getRentalBySearch = getRentalBySearch;
exports.getOfferRentals = getOfferRentals;
