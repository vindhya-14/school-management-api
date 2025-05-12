// app.js
const express = require("express");
const promisePool = require("./db/connection"); // Import the database pool

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  try {
    // Example query to fetch users
    const [rows, fields] = await promisePool.query(
      "SELECT * FROM users LIMIT 1"
    );
    res.json(rows); // Send back the query result
  } catch (err) {
    console.error("❌ Error executing query:", err.stack);
    res.status(500).send("Database query failed");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
