const User = require("../models/User");
const Otp = require("../models/Otp");
const generateOtp = require("../utils/generateOtp");
const jwt = require("jsonwebtoken");

// SEND OTP
exports.sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;

    const otp = generateOtp();

    await Otp.create({
      phone,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000)
    });

    console.log("OTP:", otp); // for testing

    res.json({ success: true, message: "OTP sent" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// VERIFY OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    const record = await Otp.findOne({ phone, otp });

    if (!record) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (record.expiresAt < new Date()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    let user = await User.findOne({ phone });

    if (!user) {
      user = await User.create({ phone, isVerified: true });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      token,
      user
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 