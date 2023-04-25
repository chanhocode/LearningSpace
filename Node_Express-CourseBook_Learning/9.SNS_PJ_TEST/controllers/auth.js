const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.join = async (req, res, next) => {
  const { nick, email, password } = req.body;
  try {
    // 이미 가입한 유저가 있는지 확인
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect('/');
  } catch (err) {
    console.error(err);
    next(err);
  }
};
exports.login = (req, res, next) => {
  // done(서버실패, 성공유저, 로직실패)
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.log(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙힘
};
exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
};
