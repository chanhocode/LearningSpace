const app = require('../app');
const request = require('supertest');
const { sequelize } = require('../models');

// beforeAll: 테스트를 시작하기전에 한번 실행
// 테스트전 db연결
beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('POST /join', () => {
  test('로그인 안 했으면 가입', (done) => {
    request(app)
      .post('/auth/join')
      .send({
        email: 'hello1@gmail.com',
        nick: 'hello1',
        password: '1234',
      })
      .expect('location', '/')
      .expect(302, done);
  });
  test('이미 가입이 되어있는데 다시 하는 경우', (done) => {
    request(app)
      .post('/auth/join')
      .send({
        email: 'hello1@gmail.com',
        nick: 'hello1',
        password: '1234',
      })
      .expect('location', '/join?error=exist')
      .expect(302, done);
  });
});

describe('POST /join', () => {
  const agent = request.agent(app);

  // 로그인
  beforeEach((done) => {
    agent
      .post('/auth/login')
      .send({
        email: 'hello1@gmail.com',
        password: '1234',
      })
      .end(done);
  });

  test('로그인 상태시 회원가입 안되어야한다.', (done) => {
    const message = encodeURIComponent('로그인한 상태입니다.');

    agent
      .post('/auth/join')
      .send({
        email: 'hello1@gmail.com',
        nick: 'hello1',
        password: '1234',
      })
      .expect('location', `/?error=${message}`)
      .expect(302, done);
  });
});

describe('POST /login', () => {
  test('로그인 수행', (done) => {
    request(app)
      .post('/auth/login')
      .send({
        email: 'hello1@gmail.com',
        password: '1234',
      })
      .expect('location', '/')
      .expect(302, done); // done을 호출하면 테스트가 끝남을 인식
    // 비동기인데 프로미스가 아닌 함수는 마지막에 done를 넣어줘야 한다.
  });

  test('가입되지 않은 회원', (done) => {
    const message = '가입되지 않은 회원입니다.';
    request(app)
      .post('/auth/login')
      .send({
        email: 'hello2@gmail.com',
        password: '12345',
      })
      .expect('location', `/?loginError=${encodeURIComponent(message)}`)
      .expect(302, done);
  });
  test('비밀번호 틀림', (done) => {
    const message = '비밀번호가 틀립니다.';
    request(app)
      .post('/auth/login')
      .send({
        email: 'hello1@gmail.com',
        password: '1233',
      })
      .expect('location', `/?loginError=${encodeURIComponent(message)}`)
      .expect(302, done);
  });
});
