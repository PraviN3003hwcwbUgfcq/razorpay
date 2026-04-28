const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: false
  },
  email: String,

  isVerified: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema); 