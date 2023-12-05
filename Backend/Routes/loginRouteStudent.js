const express = require("express");
const anwesenheitDB = require("../database/anwesenheitDB");
const loginRouteStudent = express.Router();

loginRouteStudent.get("/", (req, res) => {
  let getAllStudents = `SELECT * FROM schueler`;
  anwesenheitDB.query(getAllStudents, (err, result) => {
    if (err) {
      res.status(404).send({ message: "not Founded!!!!" });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = loginRouteStudent