const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// import Router From File
const currentRouter = require("./Routes/currentRoute");

// middle ware
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/main", currentRouter);

app.listen(4000);