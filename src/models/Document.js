const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },

  documentType: {
    type: String,
    required: true
  },

  fileName: String,
  filePath: String,
  mimeType: String,
  size: Number,

  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Document", documentSchema);