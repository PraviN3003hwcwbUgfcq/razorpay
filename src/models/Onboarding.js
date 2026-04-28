// const mongoose = require("mongoose");

// const onboardingSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     accountId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Account",
//       required: true,
//     },
//     email: String,
//     fullName: String,
//     platforms: [String],
//     website: String,
//     businessType: String,
//     businessStructure: String,
//     businessName: String,
//     panNumber: String,
//     dobOrIncorporation: String,
//     currentStep: {
//       type: Number,
//       default: 0,
//     },
//     isCompleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Onboarding", onboardingSchema);








const mongoose = require("mongoose");

const onboardingSchema = new mongoose.Schema({
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
  email: String,
  isEmailVerified: { type: Boolean, default: false },
  fullName: String,
  platforms: [String],
  website: String,
  businessType: {
    type: String,
    enum: ["registered", "individual"]
  },
  businessStructure: String,
  businessName: String,
  panNumber: String,
  dobOrIncorporation: Date,

  documents: [
    {
      type: String,
      filePath: String,
      status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
      }
    }
  ],

  isDocumentsUploaded: { type: Boolean, default: false },

  currentStep: { type: Number, default: 1 },
  isCompleted: { type: Boolean, default: false }

}, { timestamps: true });

module.exports =
  mongoose.models.Onboarding ||
  mongoose.model("Onboarding", onboardingSchema);