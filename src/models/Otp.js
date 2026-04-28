// const mongoose = require("mongoose");

// const otpSchema = new mongoose.Schema({
//   phone: String,
//   otp: String,
//   expiresAt: Date
// });

// module.exports = mongoose.model("Otp", otpSchema);







const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Otp", otpSchema);