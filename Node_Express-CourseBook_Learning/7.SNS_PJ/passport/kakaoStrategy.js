const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;
const User = require('../models/user');

module.exports = () => {
  passport.use(
    new kakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback',
      },
      // accessToken, refreshToken 카카오API를 사용할때 사용
      async (accessToken, refreshToken, profile, done) => {
        console.log('kakao profile: ', profile);
        try {
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'kakao' },
          });
          if (exUser) {
            // login
            done(null, exUser);
          } else {
            // join
            const newUser = await User.create({
              email: profile._json?.kakao_account?.email,
              nick: profile.displayName,
              snsId: profile.id,
              provider: 'kakao',
            });
            done(null, newUser);
          }
        } catch (err) {
          console.error(err);
          done(err);
        }
      }
    )
  );
};
