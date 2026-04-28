// const Document = require("../models/Document");

// exports.uploadDocument = async (req, res) => {
//   try {
//     const { documentType } = req.body;

//     if (!req.user.accountId) {
//       return res.status(400).json({
//         success: false,
//         message: "Please select account first"
//       });
//     }

//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Document file is required"
//       });
//     }

//     const document = await Document.create({
//       userId: req.user.id,
//       accountId: req.user.accountId,
//       documentType,
//       fileName: req.file.filename,
//       filePath: req.file.path,
//       mimeType: req.file.mimetype,
//       size: req.file.size
//     });

//     res.json({
//       success: true,
//       message: "Document uploaded successfully",
//       document
//     });

//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };

// exports.getDocuments = async (req, res) => {
//   try {
//     const documents = await Document.find({
//       userId: req.user.id,
//       accountId: req.user.accountId
//     });

//     res.json({
//       success: true,
//       documents
//     });

//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };










const Document = require("../models/Document");
const Onboarding = require("../models/Onboarding");

exports.uploadDocument = async (req, res) => {
  try {
    const { documentType } = req.body;

    if (!req.user.accountId) {
      return res.status(400).json({
        success: false,
        message: "Please select account first"
      });
    }

    if (!documentType) {
      return res.status(400).json({
        success: false,
        message: "Document type is required"
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Document file is required"
      });
    }

    const document = await Document.create({
      userId: req.user.id,
      accountId: req.user.accountId,
      documentType,
      fileName: req.file.filename,
      filePath: req.file.path,
      mimeType: req.file.mimetype,
      size: req.file.size
    });

    const onboarding = await Onboarding.findOneAndUpdate(
      {
        userId: req.user.id,
        accountId: req.user.accountId
      },
      {
        $push: {
          documents: {
            type: documentType,
            filePath: req.file.path,
            status: "pending"
          }
        },
        isDocumentsUploaded: true,
        currentStep: 9
      },
      { new: true, upsert: true }
    );

    res.json({
      success: true,
      message: "Document uploaded successfully",
      document,
      onboarding
    });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({
      userId: req.user.id,
      accountId: req.user.accountId
    });

    res.json({
      success: true,
      documents
    });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};