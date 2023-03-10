/** @format */

"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send({
    ok: true,
    message: "Server API REST online.",
  });
});

module.exports = app;
