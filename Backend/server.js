const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./Routes/authRoutes");
const verifyToken = require("./middleware/verifyToken");

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
app.use("/api/auth", authRoutes);

app.use("/api/main", verifyToken, currentRouter);
app.use("/api/Student", verifyToken, loginRouteStudent);
app.use("/api/Teacher", verifyToken, loginRouteTeacher);
app.use("/api/Anwesenheit", verifyToken, anwesenRouter);
app.use("/api/count", verifyToken, countRouter);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
