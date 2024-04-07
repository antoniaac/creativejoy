const express = require("express");
const productCategories = express.Router();
const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "password9898@",
  database: "creativejoy",
  port: 3306,
  multipleStatements: true,
});

productCategories.get("/", (req, res) => {
  let categorydata;

  pool.query("Select * from productCategories", (error, productCategories) => {
    if (error) {
      categorydata = error;
      res.status(500).send(error);
    } else {
      categorydata = productCategories;
      res.status(200).send(categorydata);
    }
  });
});

module.exports = productCategories;
