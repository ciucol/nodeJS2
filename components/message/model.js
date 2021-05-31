const mongoose = require("mongoose");

const { Schema } = mongoose;

const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model("Message", mySchema);
module.exports = model;
// module.exports = mongoose.model("Message", mySchema);
