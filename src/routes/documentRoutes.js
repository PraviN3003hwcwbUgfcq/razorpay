const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  uploadDocument,
  getDocuments
} = require("../controllers/documentController");

router.post("/upload", auth, upload.single("document"), uploadDocument);
router.get("/", auth, getDocuments);

module.exports = router;