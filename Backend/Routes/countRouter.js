const express = require("express");
const anwesenheitDB = require("../database/anwesenheitDB");
const countRouter = express.Router();

countRouter.get("/", (req, res) => {
  let getAllCurrentPositionQuery = `SELECT count(schueler.Schueler_ID) AS Schueler FROM schueler`;
  anwesenheitDB.query(getAllCurrentPositionQuery, (err, result) => {
    if (err) {
      res.status(404).send({ message: "not Founded!!!!" });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = countRouter
