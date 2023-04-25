const mongoose = require('mongoose');

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const chatSchema = new Schema({
  room: { // 룸 스키마와 연결
    type: ObjectId,
    required: true,
    ref: 'Room',
  },
  user: {
    type: String,
    required: true,
  },
  chat: String,
  gif: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Chat', chatSchema);
