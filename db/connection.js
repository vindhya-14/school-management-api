// db/connection.js
const mysql = require("mysql2"); // Import mysql2 package
require("dotenv").config(); // Load environment variables from .env file

// Create a connection pool to handle multiple queries efficiently
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Promise-based query API for async/await usage
const promisePool = pool.promise();

// Check the connection to the MySQL server
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ DB connection failed:", err.stack);
    return;
  }
  console.log("✅ Connected to MySQL on Railway");
  connection.release(); // Release the connection back to the pool
});

module.exports = promisePool;
