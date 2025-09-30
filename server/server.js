// server.js
require("dotenv").config();
const express = require("express");
const { query } = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// --- Cache state ---
let shippedCache = { value: 0, asOf: null };
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

// Function to refresh cache from DB
async function refreshCache() {
  try {
    const r = await query(`
      SELECT SUM(Price) AS ShippedRevenue
      FROM BookedShippedReceivedGrouped
      WHERE [Month] = FORMAT(GETDATE(), 'MMM')
        AND order_action = 'Shipped'
    `);

    const shipped = r.recordset?.[0]?.ShippedRevenue ?? 0;
    shippedCache = { value: Number(shipped), asOf: new Date().toISOString() };
    console.log("Cache updated:", shippedCache);
  } catch (e) {
    console.error("Failed to refresh cache:", e);
  }
}

// Refresh once at startup
refreshCache();

// Refresh every 30 minutes automatically
setInterval(refreshCache, CACHE_TTL_MS);

// API always returns cached value
app.get("/api/shippedRevenue", (req, res) => {
  res.json(shippedCache);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running http://localhost:${port}`));
