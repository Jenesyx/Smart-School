const express = require("express");
const anwesenheitDB = require("../database/anwesenheitDB");
const anwesenRouter = express.Router();

anwesenRouter.get("/", (req, res) => {
  let getAllCurrentPositionQuery = `SELECT * FROM anwesenheit`;
  anwesenheitDB.query(getAllCurrentPositionQuery, (err, result) => {
    if (err) {
      res.status(404).send({ message: "not Founded!!!!" });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = anwesenRouter