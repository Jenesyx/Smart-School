const express = require("express");
const anwesenheitDB = require("./../database/anwesenheitDB");
const currentRouter = express.Router();

currentRouter.get("/", (req, res) => {
  let getAllCurrentPositionQuery = `SELECT * FROM currentposition`;
  anwesenheitDB.query(getAllCurrentPositionQuery, (err, result) => {
    if (err) {
      res.status(404).send({ message: "not Founded!!!!" });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = currentRouter
