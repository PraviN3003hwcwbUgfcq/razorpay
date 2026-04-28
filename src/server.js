require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const accountRoutes = require("./routes/accountRoutes");
const onboardingRoutes = require("./routes/onboardingRoutes");
const documentRoutes = require("./routes/documentRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/onboarding", onboardingRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/documents", documentRoutes);

// ================= ROUTES =================

// Health check
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Example route (we will replace later)
app.get("/api/test", (req, res) => {
  res.json({ message: "Test route working" });
});

// ================= DB CONNECT =================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");

    app.listen(process.env.PORT || 2000, () => {
      console.log(`Server running on port ${process.env.PORT || 2000}`);
    });
  })
  .catch((err) => {
    console.log("DB Error ❌", err);
  });