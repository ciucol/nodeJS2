const store = require("./store");

const listMessage = (user) => {
  return new Promise((resolve, reject) => {
    let messages = store.listMessage(user);
    return resolve(messages);
    //return resolve(store.listMessage(user))
  });
};

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user) {
      console.error("[messageController/addMessage] No hay usuario");
      return reject("No ha llegado el usuario");
    } else if (!message) {
      return reject("No ha llegado el mensaje");
      console.error("[messageController/addMessage] No hay mensaje ");
    }
    let fullMesage = {
      user,
      message,
      date: new Date(),
    };
    let response = store.addMessage(fullMesage);
    return resolve(response);
  });
};

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !reject) {
      return reject("[messageController/updateMessage] Mensaje no editado");
    }
    const response = await store.updateMessage(id, message);
    return resolve(response);
  });
};

const delMessage = (id) => {
  return new Promise(async (resolve, reject) => {
    const response = store.delMessage(id);
    if (!response) {
      return reject("Paila");
    } else {
      return resolve("Buena");
    }
  });
};

module.exports = {
  listMessage,
  addMessage,
  updateMessage,
  delMessage,
};
