// 분리를 하는 이유: supertest에서는 app.js에서 사용할 app이라는 정의만 필요하고 listen은 필요하지 않다. _ 서버를 실행시키지 않기 떄문에
// app만 따로 사용하기 위해 모듈로 분리

const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
