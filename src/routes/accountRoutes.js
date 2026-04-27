const express = require("express");
const router = express.Router();


const auth = require("../middleware/authMiddleware");

const {
  getAccounts,
  createAccount,
  selectAccount
} = require("../controllers/accountController");

router.get("/", auth, getAccounts);
router.post("/create", auth, createAccount);
router.post("/select", auth, selectAccount);

module.exports = router;