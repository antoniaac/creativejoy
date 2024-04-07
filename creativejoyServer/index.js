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
  let categorydata;
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).send(err);
    } else {
      pool.query(
        "Select * from productCategories",
        (error, productCategories) => {
          if (error) {
            categorydata = error;
            res.status(500).send(error);
          } else {
            categorydata = productCategories;
            res.status(200).send(categorydata);
          }
        }
      );
    }
  });
});
const PORT = 5005;
const server = app.listen(PORT, () => {
  console.log("App is running on port 5005");
});
