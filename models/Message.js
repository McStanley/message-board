const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageSchema = new Schema({
  text: { type: String, maxLength: 512, required: true },
  author: { type: String, maxLength: 64, required: true },
  date: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model('Message', MessageSchema);
