const Sequelize = require('sequelize');
// 모델 이름(sequelize model, mySQL table)
module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      // 첫 번째 인수: 컬럼 정의, 두 번째 인수: 모델에 대한 설정
      {
      // sequelize는 id 자동 생성
      name: {
        // string -> mySQL = varchar
        type: Sequelize.STRING(20),
        // allowNull = not null
        allowNull: false,
        unique: true,
      },
      age: {
        // integer = int
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        // DATE = datetime, 시퀄라이즈에서 DATE 타입은 DateOnly 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      // timestamps: true -> 위 created_at 및 updatedAt 자동 제공, 현 예제에서는 false를 하고 created_at을 직접 구현
      timestamps: false,
      // 시퀄라이즈에서 자동으로 만들어주는 이름에 언더스코어 사용 유무 결정
      underscored: false,
      // 자바스크립트에서 쓰는 이름
      modelName: 'User',
      // 실제 DB에서 사용하는 이름
      tableName: 'users',
      // paranoid: true -> deletedAt 생성 _ soft delete 기능을 사용할 수 있다.
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  // hasMany 1:N 관계
  // user입장에서 외래키 commenter, sourceKey가 자신 foreignKey 너 ( 내 id를 commenter가 참조 하고 있다. )
  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
  }
};
