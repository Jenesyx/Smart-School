const mySql = require("mysql");

const anwesenheitDB = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "anwesenheit",
});

module.exports = anwesenheitDB;