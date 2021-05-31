const express = require("express");
const networkMessage = require("../components/message/network");
const networkUser = require("../components/user/network");
///

const routes = (server) => {
  server.use("/message", networkMessage);
  server.use("/user", networkUser);
};

module.exports = routes;
