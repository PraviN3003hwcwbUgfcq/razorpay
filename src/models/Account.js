const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  name: {
    type: String,
    required: true
  },

  country: {
    type: String,
    default: "India"
  }

}, { timestamps: true });

module.exports = mongoose.model("Account", accountSchema);