const express = require('express');
const path = require('path');

const app = express();

// 서버에다가 포트라는 변수를 정의 ( 전역변수 같은느낌 ) _ 포트를 정의하지 않으면 3000번에서 실행
app.set('port', process.env.PORT || 3000);

// 미들웨어: use로 정의 _ 미들웨어가 실행되고 다음 요청을 처리하기 위해 next
app.use(
  (req, res, next) => {
    console.log('all req');
    next();
  },
  (req, res, next) => {
    try {
      // throw new Error('error');
      console.log('error');
    } catch (error) {
      // next에 인수가 있으면 에러처리 미들웨어로 넘겨준다.
      next(error);
    }
  }
);
// 특정 주소 에서만 미들웨어 사용 가능
app.use('/category', (req, res, next) => {
  console.log('category middleware');
  next();
});
// request method
app.get('/', (req, res) => {
  // res.send('Hello, Express');
  // sendFile - html 파일 불러오기
  res.sendFile(path.join(__dirname, '/index.html'));
});

// 와일드 카드 OR 라우트 매개변수
app.get('/category/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
});

// 404 처리 가능
app.use((req, res, next) => {
  res.status(200).send('404 error');
  next();
});

// 애러 처리 _ 에러 미들웨어는 매개변수를 반드시 4개 모두 사용해야함
app.use((err, req, res, next) => {
  console.log(err);
  res.send('에러 발생');
});
// 익스프레스 서버 실행
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
