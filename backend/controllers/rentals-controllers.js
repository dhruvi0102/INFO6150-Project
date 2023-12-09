const { validationResult } = require("express-validator");

const Rental = require("../models/rental");

//Create a rental entry
const postRental = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ msg: "Invalid inputs, please check your data." });
  }

  const { name, rentalmodel, rentalType, rooms, bathrooms, clima, price, qt, image } =
    req.body;
  try {
    const rental = new Rental({
      name,
      rentalmodel,
      rentalType,
      rooms,
      bathrooms,
      clima,
      price,
      image,
      qt,
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

//Get all rentals
const getAllRentals = async (req, res) => {
  let rentals;
  try {
    rentals = await Rental.find({ qt: { $gt: 0 } }).sort({ price: 1 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: "Fetching rentals failed, please try again" });
  }
  res.json({ rentals: rentals.map((rental) => rental.toObject({ getters: true })) });
};

//Get single rental by ID
const getRentalById = async (req, res) => {
  let rentalById;
  try {
    rentalById = await Rental.findById(req.params.id);
  } catch (err) {
    console.err(err.message);
    res.status(500).send({ msg: "Can not find this rental" });
  }
  if (!rentalById) {
    return res.status(404).json({ msg: "Rental not found" });
  }

  res.json({ rental: rentalById.toObject({ getters: true }) });
};

//Get 3 rentals with lower price for Landing page
const getOfferRentals = async (req, res) => {
  let offerRentals;
  try {
    offerRentals = await Rental.find({ qt: { $gt: 0 } })
      .sort({ price: 1 })
      .limit(3);
  } catch (err) {
    console.err(err.message);
    res.status(500).send({ msg: "Fatching rentals failed, please try again" });
  }

  res.json({ rentals: offerRentals.map((rental) => rental.toObject({ getters: true })) });
};

//Get rental list by searched name,model or rental type
const getRentalByName = async (req, res) => {
  let rentals;
  const str2 = req.params.name;
  console.log("here");
  try {
    rentals = await Rental.find({
      $or: [
        { name:  str2 },
        { rentalmodel:str2 },
        { rentalType: str2 },
      ],
      qt: { $gt: 1 },
    }).sort({ price: 1 });
    console.log(req.params.name);
  } catch (err) {
    console.err(err.message);
    res.status(500).send({ msg: "Can not find rentals with that name" });
  }

  if (!rentals) {
    return res.status(404).json({ msg: "Rentals not found" });
  }

  res.json({ rentals: rentals.map((rental) => rental.toObject({ getters: true })) });
};

exports.postRental = postRental;
exports.getAllRentals = getAllRentals;
exports.getRentalById = getRentalById;
exports.getRentalByName = getRentalByName;
exports.getOfferRentals = getOfferRentals;
