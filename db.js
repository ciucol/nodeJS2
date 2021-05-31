const db = require("mongoose");

db.Promise = global.Promise;

const connect = async (user, pass, host, dataBase) => {
  await db.connect(
    `mongodb+srv://${user}:${pass}@${host}/${dataBase}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  console.log("[db] Conectada con éxito");
};

module.exports = { connect };
