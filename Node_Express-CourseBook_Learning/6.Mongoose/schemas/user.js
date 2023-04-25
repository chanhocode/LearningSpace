const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  // id _ 자동생성
  name: {
    type: String,
    required: true, // 필수 설정
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  married: {
    type: Boolean,
    required: true,
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
