const mongoose = require("mongoose");

//User schema
const adminSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4 },
  email: { type: String, required: true, unique: true, minlength: 6 },
  password: { type: String, required: true, minlength: 6 },
  resetToken: { type: String },
  expToken: { type: Date },
});

module.exports = mongoose.model("Admin", adminSchema);
