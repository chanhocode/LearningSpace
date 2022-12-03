const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

// morgan _ 터미널에 요청과 응답에 대한 정보를 출력해주는 미들웨어.
app.use(morgan('dev'));
// app.use('요청경로', express.static('실제 경로'))
// ex) localhost:3000/hello.css -> learn-express/public/hello.css
app.use('/', express.static(path.join(__dirname, 'public')));

// 데이터 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // true이면 qs, false이면 queryString

// 쿠키 생성
app.use(cookieParser(process.env.COOKIE_SECRET));
// 요청마다 개인의 저장공간을 만들어준다.
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'connect.sid',
  })
);

const multer = require('multer');
const fs = require('fs');

// 업로드 폴더 생성
try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
const upload = multer({
  // 업로드한 파일 저장 위치 정의
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    // 파일 올릴떄 이름 정의
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'multipart.html'));
});
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('ok');
});

/*
미들웨어 확장법
app.use('/', (req, res, next) => {
  if(req.session.id) {
    express.static(_dirname, 'public')(req,res,next)
  } else {
    next();
  }
})
*/

app.get(
  '/',
  (req, res, next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();
  },
  (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
  }
);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
