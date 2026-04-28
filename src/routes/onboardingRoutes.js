const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  saveContact,
  saveBasicDetails,
  savePlatforms,
  saveWebsite,
  saveBusinessType,
  saveBusinessStructure,
  saveBusinessName,
  savePanDetails,
  getOnboarding
} = require("../controllers/onboardingController");

router.post("/contact", auth, saveContact);
router.post("/basic-details", auth, saveBasicDetails);
router.post("/platforms", auth, savePlatforms);
router.post("/website", auth, saveWebsite);
router.post("/business-type", auth, saveBusinessType);
router.post("/business-structure", auth, saveBusinessStructure);
router.post("/business-name", auth, saveBusinessName);
router.post("/pan-details", auth, savePanDetails);

router.get("/me", auth, getOnboarding);

module.exports = router;