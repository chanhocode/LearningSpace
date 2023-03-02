const Sequelize = require('sequelize');
// const User = require('./user');
// const Post = require('./post');
// const Hashtag = require('./hashtag');
const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;

// db.user = User;
// db.Post = Post;
// db.Hashtag = Hashtag;
// User.initiate(sequelize);
// Post.initiate(sequelize);
// Hashtag.initiate(sequelize);
// User.associate(db);
// Post.associate(db);
// Hashtag.associate(db);
// 위 동작 자동화
const basename = path.basename(__filename); // 현재 파일
fs.readdirSync(__dirname) // 현재 파일 위치
  .filter((file) => {
    //file.indexOf('.') !== 0 _ 숨긴파일 걸러내기
    return (
      file.indexOf('.') !== 0 &&
      !file.includes('test') &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    console.log(file, model.name);
    db[model.name] = model;
    model.initiate(sequelize);
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
