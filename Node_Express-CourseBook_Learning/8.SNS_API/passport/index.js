const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user'); // 유저테이블에 데이터 삽입

module.exports = () => {
  passport.serializeUser((user, done) => {
    // user === exUser
    done(null, user.id);
  }); // session {세션쿠키: Id} 메모리에 저장 _ id만 추출하는 이유는 모든 정보를 담으면 메모리 너무 커짐

  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
      include: [
        {
          model: User,
          attributes: ['id', 'nick'],
          as: 'Followers',
        }, // 팔로잉
        {
          model: User,
          attributes: ['id', 'nick'],
          as: 'Followings',
        }, // 팔로워
      ],
    })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local();
  kakao();
};
