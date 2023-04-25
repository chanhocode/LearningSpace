const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();

const webSocket = require('./socket');

const indexRouter = require('./routes');

const app = express();
app.set('port', process.env.PORT || 8005);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
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

app.use('/', indexRouter);

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
  res.render('error');
});

const server = app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

webSocket(server);
