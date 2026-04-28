const Onboarding = require("../models/Onboarding");
const sendEmail = require("../utils/sendEmail");

// 🔹 STEP 1: Save Contact (Email)
// exports.saveContact = async (req, res) => {
//   try {
//     const { email } = req.body;

//     const data = await Onboarding.findOneAndUpdate(
//       {
//         userId: req.user.id,
//         accountId: req.user.accountId
//       },
//       {
//         email,
//         currentStep: 1
//       },
//       { upsert: true, new: true }
//     );

//     res.json({ success: true, data });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


exports.saveContact = async (req, res) => {
  try {
    const { email } = req.body;

    // send test email
    await sendEmail(
      email,
      "Welcome 🚀",
      "Your email is successfully received!"
    );

    const data = await Onboarding.findOneAndUpdate(
      {
        userId: req.user.id,
        accountId: req.user.accountId
      },
      {
        email,
        currentStep: 1
      },
      { upsert: true, new: true }
    );

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 STEP 2: Save Full Name
exports.saveBasicDetails = async (req, res) => {
  try {
    const { fullName } = req.body;

    const data = await Onboarding.findOneAndUpdate(
      {
        userId: req.user.id,
        accountId: req.user.accountId
      },
      {
        fullName,
        currentStep: 2
      },
      { new: true }
    );

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔹 STEP 3: Payment Platforms
exports.savePlatforms = async (req, res) => {
  try {
    const { platforms } = req.body;

    const data = await Onboarding.findOneAndUpdate(
      {
        userId: req.user.id,
        accountId: req.user.accountId
      },
      {
        platforms,
        currentStep: 3
      },
      { new: true }
    );

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔹 STEP 4: Website
exports.saveWebsite = async (req, res) => {
  try {
    const { website } = req.body;

    const data = await Onboarding.findOneAndUpdate(
      {
        userId: req.user.id,
        accountId: req.user.accountId
      },
      {
        website,
        currentStep: 4
      },
      { new: true }
    );

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔹 STEP 5: Business Type
exports.saveBusinessType = async (req, res) => {
  try {
    const { businessType } = req.body;

    const data = await Onboarding.findOneAndUpdate(
      {
        userId: req.user.id,
        accountId: req.user.accountId
      },
      {
        businessType,
        currentStep: 5
      },
      { new: true }
    );

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔹 STEP 6: Business Structure
exports.saveBusinessStructure = async (req, res) => {
  try {
    const { businessStructure } = req.body;

    const data = await Onboarding.findOneAndUpdate(
      {
        userId: req.user.id,
        accountId: req.user.accountId
      },
      {
        businessStructure,
        currentStep: 6
      },
      { new: true }
    );

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔹 STEP 7: Business Name
exports.saveBusinessName = async (req, res) => {
  try {
    const { businessName } = req.body;

    const data = await Onboarding.findOneAndUpdate(
      {
        userId: req.user.id,
        accountId: req.user.accountId
      },
      {
        businessName,
        currentStep: 7
      },
      { new: true }
    );

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔹 STEP 8: PAN Details
exports.savePanDetails = async (req, res) => {
  try {
    const { panNumber, dobOrIncorporation } = req.body;

    const data = await Onboarding.findOneAndUpdate(
      {
        userId: req.user.id,
        accountId: req.user.accountId
      },
      {
        panNumber,
        dobOrIncorporation,
        currentStep: 8,
        isCompleted: true
      },
      { new: true }
    );

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🔹 GET ONBOARDING DATA
exports.getOnboarding = async (req, res) => {
  try {
    const data = await Onboarding.findOne({
      userId: req.user.id,
      accountId: req.user.accountId
    });

    res.json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};









