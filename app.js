const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes"); // Import the route file
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(express.json()); // to parse JSON request bodies

// ✅ Mount the school routes with /api prefix
app.use("/api", schoolRoutes);

app.get("/", (req, res) => {
  res.send("School Management API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
