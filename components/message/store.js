const Model = require("./model");

const listMessage = async (user) => {
  let filter = {};
  !user ? null : (filter = { user: user });
  let message = await Model.find(filter);
  return message;
};

const addMessage = async (fullMessage) => {
  const myMessage = new Model(fullMessage);
  await myMessage.save();
  return fullMessage;
};

const updateMessage = async (id, message) => {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
};

const delMessage = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = {
  listMessage,
  addMessage,
  updateMessage,
  delMessage,
};
