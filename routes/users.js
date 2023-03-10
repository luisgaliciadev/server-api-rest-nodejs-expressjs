/** @format */

"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const users = [
    {
      id: 1,
      userName: "user_1",
    },
    {
      id: 2,
      userName: "user_2",
    },
  ];
  return res.status(200).send({
    ok: true,
    message: "Users list",
    data: users,
  });
});

module.exports = app;
