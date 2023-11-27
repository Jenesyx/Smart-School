const express = require("express");
const anwesenheitDB = require("../database/anwesenheitDB");
const loginRouteTeacher = express.Router();

const authenticateTeacher = (username, password) => {
  const teacher = anwesenheitDB.getTeacherByUsernameAndPassword(username, password);

  if (teacher) {
    return 'teacher';
  } else {
    return null;
  }
};

loginRouteTeacher.post("/login", (req, res) => {
  const { username, password } = req.body;

  const userType = authenticateTeacher(username, password);

  if (userType === 'teacher') {
    res.json({ userType });
  } else {
    res.status(401).json({ error: "Authentication failed" });
  }
});

module.exports = loginRouteTeacher;