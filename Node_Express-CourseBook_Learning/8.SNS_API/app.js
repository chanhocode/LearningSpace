const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session'); // 로그인에 세션 사용
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');
const { sequelize } = require('./models');

dotenv.config(); // process.env

const authRouter = require('./routes/auth');
const indexRouter = require('./routes');
const v1Router = require('./routes/v1');
const v2Router = require('./routes/v2');

const passportConfig = require('./passport');

const app = express();
passportConfig();
app.set('port', process.env.PORT || 8002);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

// sequelize.sync({force: true}) _ 테이블 제거후 재생성
sequelize
  .sync()
  .then(() => {
    console.log('database success');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan('dev')); // dev 모드는 자세하게 로깅을 해준다. 배포시 combined로 바꾼다. (서비스에 필요한 정도의 로깅)
app.use(express.static(path.join(__dirname, 'public'))); // public 폴더를 static 폴더로 만든다. 프론트에서 자유롭게 public 폴더 내의 파일에 접근 가능

app.use(express.json()); // json 요청을 받을 수 있게 처리
app.use(express.urlencoded({ extended: false })); // form을 받을 수 있게

app.use(cookieParser(process.env.COOKIE_SECRET)); // 쿠키 전송 처리
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
// passport는 반드시, express session 밑에 있어야한다.
app.use(passport.initialize()); // req.user, req.login, req.isAuthenticate, req.logout
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/v1', v1Router);
app.use('/v2', v2Router);

// 404 처리 (위 라우터에 해당 라우터가 없는 경우)
app.use((req, res, next) => {
  const error = new Error(
    `${req.method} ${req.url} 라우터가 존재하지 않습니다.`
  );
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error'); // nunjucks views폴더의 error.html을 찾아서 렌더
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
