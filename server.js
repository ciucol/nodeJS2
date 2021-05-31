const express = require("express");
const routes = require("./network/routes");
const db = require("./db");
// db
const { config } = require("./config");
const user = encodeURIComponent(config.dbUser);
const pass = encodeURIComponent(config.dbPassword);
const host = encodeURIComponent(config.dbHost);
const dataBase = encodeURIComponent(config.dbName);

const app = express();
app.use(express.json());

db.connect(user, pass, host, dataBase);
routes(app);

app.use("/app", express.static("public"));

app.listen(3000, () => {
  console.log("Server en 3000");
});
