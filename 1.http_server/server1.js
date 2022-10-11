const http = require('http');

// localhost:8080
const server = http
  .createServer(
    // 요청이 오면 함수 실행후 응답
    (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<h1>Hello HTTP</h1>');
      res.write('<p>hello server</p>');
      res.end('<p>hello chanho</p>');
    }
  )
  // 8080번 포트에 프로세스로서 동작하게 설정
  // .listen(8080, () => {
  //   console.log('8080port_success');
  // });

  .listen(8080);
// listening을 이용하여 listen의 콜백을 밖으로 빼낼 수 있따.
server.on('listening', () => {
  console.log('8080port_success');
});
server.on('error', (error) => {
  console.error(error);
});

// 동시에 서버 실행 가능 ('localhost:8081')
const server1 = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello HTTP</h1>');
    res.write('<p>hello server</p>');
    res.end('<p>hello chanho</p>');
  })
  .listen(8081);
server.on('listening', () => {
  console.log('8081port_success');
});
server.on('error', (error) => {
  console.error(error);
});
