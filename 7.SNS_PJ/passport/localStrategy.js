const passport = require('passport');
const bcrypt = require('bcrypt');
const { Strategy: localStrategy } = require('passport-local');
const User = require('../models/user');
module.exports = () => {
  passport.use(
    new localStrategy(
      {
        usernameField: 'email', // req.body.email
        passwordField: 'password', // req.body.password
        passReqToCallback: false, // true 이면 다음 함수에 req 사용가능
      },
      async (email, password, done) => { // done(서버실패, 성공유저, 로직실패)
        try {
          const exUser = await User.findOne({ where: { email } });
          if (exUser) { // 비교
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: '비밀번호가 틀립니다.' });
            }
          } else {
            done(null, false, { message: '가입되지 않은 회원입니다.' });
          }
        } catch (err) {
          console.error(err);
          done(err);
        }
      }
    )
  );
};
