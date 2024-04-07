const express = require("express");
const app = express();
const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "password9898@",
  database: "creativejoy",
  port: 3306,
  multipleStatements: true,
});

app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Connection established");
    }
  });
});
const PORT = 5005;
const server = app.listen(PORT, () => {
  console.log("App is running on port 5005");
});
