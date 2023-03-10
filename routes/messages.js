/** @format */

"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const messages = [
    {
      id: 1,
      message: "message_1",
    },
    {
      id: 2,
      message: "message_2",
    },
  ];
  return res.status(200).send({
    ok: true,
    message: "Messages list",
    data: messages,
  });
});

app.post("/", (req, res, next) => {
  const message = req.body;
  return res.status(200).send({
    ok: true,
    message: "Message",
    data: message,
  });
});

module.exports = app;
