// const Account = require("../models/Account");

// // GET ACCOUNTS
// exports.getAccounts = async (req, res) => {
//   try {
//     const accounts = await Account.find({ userId: req.user.id });

//     res.json({
//       success: true,
//       accounts
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // CREATE ACCOUNT
// exports.createAccount = async (req, res) => {
//   try {
//     const { name, country } = req.body;

//     const account = await Account.create({
//       userId: req.user.id,
//       name,
//       country
//     });

//     res.json({
//       success: true,
//       account
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
















const Account = require("../models/Account");
const jwt = require("jsonwebtoken");


// 🔹 GET ACCOUNTS
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ userId: req.user.id });

    res.json({
      success: true,
      accounts
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔹 CREATE ACCOUNT
exports.createAccount = async (req, res) => {
  try {
    const { name, country } = req.body;

    const account = await Account.create({
      userId: req.user.id,
      name,
      country
    });

    res.json({
      success: true,
      account
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔹 SELECT ACCOUNT (ADD THIS)
exports.selectAccount = async (req, res) => {
  try {
    const { accountId } = req.body;

    // 🔒 Validate account belongs to user
    const account = await Account.findOne({
      _id: accountId,
      userId: req.user.id
    });

    if (!account) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized account"
      });
    }

    // 🔐 Create new token with accountId
    const token = jwt.sign(
      {
        id: req.user.id,
        accountId: account._id
      },
      process.env.JWT_SECRET
    );

    res.json({
      success: true,
      token,
      account
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};