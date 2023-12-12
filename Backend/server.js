const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// import Router From File
const currentRouter = require("./Routes/currentRoute");
const loginRouteStudent = require("./Routes/loginRouteStudent");
const loginRouteTeacher = require("./Routes/loginRouteTeacher");
const anwesenRouter = require("./Routes/anwesenRouter")
const countRouter = require("./Routes/countRouter")

// middle ware
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/main", currentRouter);
app.use("/api/Student", loginRouteStudent);
app.use("/api/Teacher", loginRouteTeacher);
app.use("/api/Anwesenheit", anwesenRouter);
app.use("/api/count", countRouter)

app.listen(4000);
