const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const app = express();
app.use(cors());

const config = {
  user: "KSmith",
  password: "CoolGuy123",
  server: "172.20.0.2",
  port: 1435,
  database: "Advance",
  options: {
    encrypt: false,
    trustedServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: "ADVANCEPRO",
  },
};
app.get("/Pallets", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const data = pool.request().query(
      `
        SELECT 
        * 
        FROM receive_detrash_pallet
        `
    );
    data.then((res1) => {
      return res.json(res1);
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  return res.json("hi I am backend");
});

app.listen(3000, () => {
  console.log(`The server has started`);
});
