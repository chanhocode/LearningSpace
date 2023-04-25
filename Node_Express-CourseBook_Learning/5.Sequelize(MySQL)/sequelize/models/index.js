const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
console.log('env : ', env);
const config = require('../config/config')[env];
console.log('config : ', config);
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;
