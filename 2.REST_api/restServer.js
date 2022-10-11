const http = require('http');
const fs = require('fs').promises;

// http status code 참조

// DataBase 대용의 DummyData 객체
const users = {};

// http 서버 생성 _ req 요청 / res 응답
http
  .createServer(async (req, res) => {
    try {
      // http 메서드가 'GET'일때,
      if (req.method === 'GET') {
        // 요청받은 url을 통해 요청 주소 구분
        // '/'이므로, restFront.html 파일을 제공 ( LandingPage 를 보여준다. )
        if (req.url === '/') {
          // 'restFront.html'파일을 읽어서 상수 data안에 비동기적으로 저장후 응답.
          const data = await fs.readFile('./restFront.html');
          // '200'은 성공했다는 것을 알려주는것 _ writeHead는 (Network Tab의) Headers 이다. _ 헤더를 작성 _ 헤더란 데이터에 대한 데이터
          // Response Headers에서 Content-Type으로 'text/html; charset=utf-8' 는 html 파일 이고, 한글을 사용 할 수 있다 라는 정보를 담아준다.
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          // res.end() 응답 프로세스를 종료하기 위해 사용
          return res.end(data);
        }
        // about.html 파일을 제공
        else if (req.url === '/about') {
          // 'about.html'파일을 읽어서 상수 data안에 저장 후 응답해준다.
          const data = await fs.readFile('./about.html');
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          return res.end(data);
        }
        // 사용자 목록을 제공,
        else if (req.url === '/users') {
          // 200이 더 어울림
          res.writeHead(201, {
            'Content-Type': 'application/json; charset=utf-8',
          });
          // 사용자 전달 _ json으로 보내기 위해서 JSON.stringfy()
          console.dir(users);
          return res.end(JSON.stringify(users));
        }
        // /도 /about도 /users도 아니면 기타 정적 파일 제공
        try {
          const data = await fs.readFile(`.${req.url}`);
          return res.end(data);
        } catch (err) {
          // 존재하지 않는 파일을 요청했거나 GET메서드 요청이 아닌경우 에러 응답.
          // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
          // 응답 과정 중에 서버에서 에러가 발생한 경우 500 Error 발생
        }
      }
      // http 메서드가 'POST' 요청이면,
      else if (req.method === 'POST') {
        // 'POST' 사용자 등록
        if (req.url === '/user') {
          let body = '';
          // 요청의 body를 stream 형식으로 받음 청크들을 모아서 아래 on('end')할때 body로 받는다.
          // stream이란? 일반적으로 데이터, 패킷, 비트 등의 일련의 연속성을 갖는 흐름을 의미.
          req.on('data', (data) => {
            console.log('POST_/user_req.on -> data: ', data);
            body += data;
          });
          // 요청의 body를 다 받은 후 실행됨
          return req.on('end', () => {
            console.log('POST 본문(Body):', body);
            // 객체를 서버에서 동일하게 받기 위해 위의 과정이 필요.
            const { name } = JSON.parse(body);
            const id = Date.now();
            users[id] = name;
            // 200은 단순 성공을 의미하고 201은 생성됨 이라는 의미를 가진다.
            res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
            // 응답 데이터 (NETWORK - RESPONSE)
            res.end('ok');
          });
        }
      }
      // http 메서드가 'PUT' 요청이면,
      else if (req.method === 'PUT') {
        // 'PUT /user/${userId}' 해당 id의 사용자 수정
        // startWith()는 문자열이 특정 문자열로 시작하는지 확인하는 메서드 이다.
        // req.url이 '/user/'로 시작한다면, ->
        if (req.url.startsWith('/user/')) {
          const key = req.url.split('/')[2];
          console.log('POST_/user/ key: ', key);
          let body = '';
          req.on('data', (data) => {
            console.log('POST_/user/_req.on->data: ', data);
            body += data;
          });
          return req.on('end', () => {
            console.log('PUT 본문(Body):', body);
            users[key] = JSON.parse(body).name;
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            return res.end('ok');
          });
        }
      }
      // http 메서드가 'DELETE' 요청이면,
      else if (req.method === 'DELETE') {
        // 'PUT /user/${userId}' 해당 id의 사용자 제거
        if (req.url.startsWith('/user/')) {
          const key = req.url.split('/')[2];
          console.log('DELETE_/user/ key: ', key);
          // DummyDB users에서 위에서 가져온 key를 가진 사용자 제거
          delete users[key];
          res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end('ok');
        }
      }
      res.writeHead(404);
      return res.end('NOT FOUND');
    } catch (err) {
      // 응답 과정 중에 서버에서 에러가 발생한 경우 500 Error 발생
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  })
  // 8082번 포트에 프로세스로 동작하도록 설정
  .listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다');
  });
