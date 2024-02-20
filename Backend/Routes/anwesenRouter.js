const express = require("express");
const anwesenheitDB = require("../database/anwesenheitDB");
const anwesenRouter = express.Router();

// anwesenRouter.get("/", (req, res) => {
//   let getAllCurrentPositionQuery = `SELECT * FROM anwesenheit`;
//   anwesenheitDB.query(getAllCurrentPositionQuery, (err, result) => {
//     if (err) {
//       res.status(404).send({ message: "not Founded!!!!" });
//     } else {
//       res.status(200).send(result);
//     }
//   });
// });

anwesenRouter.post("/come", (req, res) => {
  const { schuelerId, time } = req.body;
  const insertQuery = `INSERT INTO Anwesenheit (Ankunftszeit, Schueler_ID) VALUES (?, ?)`;

  anwesenheitDB.query(insertQuery, [time, schuelerId], (err, result) => {
    if (err) {
      console.error("Error recording arrival time: ", err);
      return res.status(500).send("Error recording arrival time");
    }
    res.status(200).send("Arrival time recorded successfully");
  });
});

anwesenRouter.post("/go", (req, res) => {
  const { schuelerId, time } = req.body;
  const updateQuery = `UPDATE Anwesenheit SET Gangzeit = ? WHERE Schueler_ID = ? ORDER BY Anwesenheit_ID DESC LIMIT 1`;

  anwesenheitDB.query(updateQuery, [time, schuelerId], (err, result) => {
    if (err) {
      console.error("Error recording departure time: ", err);
      return res.status(500).send("Error recording departure time");
    }
    res.status(200).send("Departure time recorded successfully");
  });
});

module.exports = anwesenRouter