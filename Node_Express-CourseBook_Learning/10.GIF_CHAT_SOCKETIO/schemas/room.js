const mongoose = require('mongoose');

const { Schema } = mongoose;
const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  max: { // 방 참여 최대 인원
    type: Number,
    required: true,
    default: 10,
    min: 2, // 최소 인원
  },
  owner: { // 방장
    type: String,
    required: true,
  },
  password: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Room', roomSchema);
