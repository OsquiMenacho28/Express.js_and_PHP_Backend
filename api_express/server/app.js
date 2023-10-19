const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const actorsRoutes = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.use("/apiexpress", actorsRoutes);

app.use(express.static(path.join(__dirname, "../dist")));

module.exports = app;
