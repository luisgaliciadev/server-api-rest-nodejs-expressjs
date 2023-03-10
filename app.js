/** @format */

"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS "
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Content-Type", "text/plain");
  next();
});

// Import Routes
const appRoutes = require("./routes/app");
const messagesRoutes = require("./routes/messages");
const usersRoutes = require("./routes/users");

app.listen(3000, () => {
  console.log("Express Server Port: 3000: \x1b[32m%s\x1b[0m", "Online");
});

// Routes
app.use("/api", appRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", usersRoutes);
