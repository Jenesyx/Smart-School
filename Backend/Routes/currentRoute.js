const express = require("express");
const anwesenheitDB = require("./../database/anwesenheitDB");
const currentRouter = express.Router();

currentRouter.get("/", (req, res) => {
  var date = new Date(Number(req.query['date']));
  date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);
  let getAllCurrentPositionQuery = `SELECT schueler.Vorname, schueler.Nachname, cast(anwesenheit.Ankunftszeit as time) AS Ankunftszeit, cast(anwesenheit.Gangzeit as time) AS Gangzeit FROM schueler INNER JOIN anwesenheit on schueler.Schueler_ID = anwesenheit.Schueler_ID WHERE date(anwesenheit.Ankunftszeit) = date('${date}')`;
  anwesenheitDB.query(getAllCurrentPositionQuery, (err, result) => {
    if (err) {
      res.status(404).send({ message: "not Founded!!!!" });
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = currentRouter
// update 1.5.0
