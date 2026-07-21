const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);




// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to CodeAlpha E-commerce API 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

