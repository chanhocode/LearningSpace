const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // {mycokkie: 'test'}
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    // 쿼리 스트링에서 name 추출
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    // 301 또는 302는 리다이렉트(서버에서 클라이언트에서 요청한 URL에 대 응답에서 다른 URL로 재접속 하라고 명령을 보내는 것을 말한다.)
    res.writeHead(302, {
      Location: '/',
      // name에 한글이 들어가기 때문에 encodeURIComponent 해준다.
      // Expires 는 쿠키의 만료기간 설정 (넣지 않으면 세션쿠키가 된다. _ 브라우저를 종료하는 순간 쿠키가 사라진다.)
      // httpOnly를 이용하여 자바스크립트로 쿠키에 접근을 막는다.
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  // name이라는 쿠키가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile('./cookie2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });
