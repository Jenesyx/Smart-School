const express = require("express");
const anwesenheitDB = require("../database/anwesenheitDB");
const loginRouteTeacher = express.Router();

loginRouteTeacher.get("/", (req, res) => {
  let getAllTeachers = `SELECT * FROM lehrer`;
  anwesenheitDB.query(getAllTeachers, (err, result) => {
    if (err) {
      res.status(404).send({ message: "not Founded!!!!" });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = loginRouteTeacher