const mongoose = require("mongoose");

// House schema
const houseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  capacity: { type: Number, required: true },
  amenities: [String],
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      text: String,
      rating: Number,
      date: { type: Date, default: Date.now }
    }
  ],
  bookedDates: [Date],
});

module.exports = mongoose.model("House", houseSchema);
