const express = require("express");
const anwesenheitDB = require("../database/anwesenheitDB");
const loginRouteStudent = express.Router();

const authenticateStudent = (username, password) => {
  const student = anwesenheitDB.getStudentByUsernameAndPassword(username, password);

  if (student) {
    return 'student';
  } else {
    return null;
  }
};

loginRouteStudent.post("/login", (req, res) => {
  const { username, password } = req.body;

  const userType = authenticateStudent(username, password);

  if (userType === 'student') {
    res.json({ userType });
  } else {
    res.status(401).json({ error: "Authentication failed" });
  }
});

module.exports = loginRouteStudent;