// const mongoose = require("mongoose");


// const onboardingSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   },

//   accountId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Account",
//     required: true
//   },

//   // 🔹 STEP 1: Contact Details
//   email: String,
//   isEmailVerified: {
//     type: Boolean,
//     default: false
//   },

//   // 🔹 STEP 2: Basic Details
//   fullName: String,

//   // 🔹 STEP 3: Payment Platforms
//   platforms: [String], // website, android, ios, etc.

//   // 🔹 STEP 4: Website
//   website: String,

//   // 🔹 STEP 5: Business Type
//   businessType: {
//     type: String,
//     enum: ["registered", "individual"]
//   },

//   // 🔹 STEP 6: Business Structure
//   businessStructure: String,

//   // 🔹 STEP 7: Business Name
//   businessName: String,

//   // 🔹 STEP 8: PAN Details
//   panNumber: String,
//   dobOrIncorporation: Date,

//   // 🔹 STEP STATUS TRACKING
//   currentStep: {
//     type: Number,
//     default: 1
//   },

//   isCompleted: {
//     type: Boolean,
//     default: false
//   }

// }, { timestamps: true });

// module.exports = mongoose.model("Onboarding", onboardingSchema);





// // //*css*/`
  
// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/documents");
//   },
//   filename: (req, file, cb) => {
//     const uniqueName =
//       Date.now() + "-" + Math.round(Math.random() * 1e9);

//     cb(null, uniqueName + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [
//     "application/pdf",
//     "image/jpeg",
//     "image/png",
//     "image/jpg"
//   ];

//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only PDF, JPG, JPEG, PNG allowed"), false);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: {
//     fileSize: 5 * 1024 * 1024
//   }
// });

// module.exports = upload;






const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadPath = path.join(__dirname, "../../uploads/documents");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg"
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, JPG, JPEG, PNG files allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

module.exports = upload;