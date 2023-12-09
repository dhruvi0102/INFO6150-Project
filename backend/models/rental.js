const mongoose = require("mongoose");

//Rental schema
const rentalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rentalmodel: { type: String, required: true },
  rentalType: { type: String, required: true },
  rooms: { type: Number, required: true },
  bathrooms: { type: String, required: true },
  clima: { type: Boolean, default: true, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  qt: { type: Number, required: true },
});

module.exports = mongoose.model("Rental", rentalSchema);