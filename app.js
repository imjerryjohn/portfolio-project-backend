// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// members ROUTES
const memberController = require("./controllers/memberController.js");
app.use("/members", memberController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Second Nature");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;