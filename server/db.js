// src/db.js
const sql = require("mssql");

let pool;
const config = {
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DB,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: Number(process.env.SQL_PORT || 1433),
  options: {
    encrypt: false,
    trustServerCertificate: process.env.SQL_TRUST_SERVER_CERT === "true",
  },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
};

async function getPool() {
  if (pool) return pool;
  pool = await sql.connect(config);
  return pool;
}

async function query(q, params = []) {
  const p = await getPool();
  const req = p.request();
  for (const { name, type, value } of params) req.input(name, type, value);
  return req.query(q);
}

module.exports = { sql, getPool, query };
