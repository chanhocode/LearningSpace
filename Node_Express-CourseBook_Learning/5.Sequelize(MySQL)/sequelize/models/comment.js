const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
  // belongsTo 속해 있다. _ 댓글은 사용자에게 속해 있다. _ belongsKey일떄는 source가 아닌 target _ belongsTo가 아닌 쪽에 foreginKey컬럼이 추가된다.
  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  }
};

