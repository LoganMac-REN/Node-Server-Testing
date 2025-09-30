// server.js
require("dotenv").config();
const express = require("express");
const { sql, query } = require("./db");
const cors = require("cors");

const app = express();
app.use(cors()); // or restrict to your frontend domain here
app.use(express.json());

app.get("/api/shippedRevenue", async (req, res) => {
  try {
    const r = await query(`
      SELECT SUM(Price) AS ShippedRevenue
      FROM BookedShippedReceivedGrouped
      WHERE [Month] = FORMAT(GETDATE(), 'MMM')
        AND order_action = 'Shipped'
    `);

    const shipped = r.recordset?.[0]?.ShippedRevenue ?? 0;
    res.json({ shippedRevenue: Number(shipped), asOf: new Date().toISOString() });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Query failed" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running http://localhost:${port}`));
