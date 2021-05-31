const express = require("express");
const router = express.Router();
const response = require("../../network/response");

router.get("/", (req, res) => {
  console.log("Users");
  response.success(req, res, 200, "Usuarios");
});

module.exports = router;
