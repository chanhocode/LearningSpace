const http = require('http');
const fs = require('fs').promises;

// 서버에서 html 파일을 읽어서 전송
const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      const data = await fs.readFile('./server2.html');
      res.end(data);
    } catch (err) {
      console.error(err);
      // plain 일반 문자열을 가리킴
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  })

  .listen(8080);
// listening을 이용하여 listen의 콜백을 밖으로 빼낼 수 있따.
server.on('listening', () => {
  console.log('8080port_success');
});
server.on('error', (error) => {
  console.error(error);
});
