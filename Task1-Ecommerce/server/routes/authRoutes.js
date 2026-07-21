const express = require("express");
const { register } = require("../controllers/authController");

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth routes working",
  });
});

// Register
router.post("/register", register);

module.exports = router;