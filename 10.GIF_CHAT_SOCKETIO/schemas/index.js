const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL = `mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin`;
console.log(MONGO_ID);
console.log(MONGO_PASSWORD);
const connect = () => {
  if (NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect(
    MONGO_URL,
    {
      dbName: 'gifchat',
      useNewUrlParser: true,
    },
    (error) => {
      if (error) {
        console.log('mongo error', error);
      } else {
        console.log('mongo success');
      }
    }
  );
};

mongoose.connection.on('error', (error) => {
  console.log('mongo error', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결 끊김, 재연결 시도');
  connect();
});

module.exports = connect;
