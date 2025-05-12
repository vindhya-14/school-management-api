const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const schoolRoutes = require("./routes/schoolRoutes"); // Import routes

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json()); // Parse JSON body

// Routes
app.use("/api", schoolRoutes); // Prefix your routes with /api

// Root route for testing
app.get("/", (req, res) => {
  res.send("🎉 School Management API is Live!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
