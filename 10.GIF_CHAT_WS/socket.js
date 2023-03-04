const WebSocket = require('ws');

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws, req) => {
    // 웹소켓 연결시 실행
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // 클라이언트 ip 가져오기
    console.log('새로운 클라이언트 접속', ip);
    
    ws.on('message', (message) => { // 메세지는 버퍼이기 때문에 toSrting() 필요
      console.log(message.toString());
    });
    ws.on('error', (error) => { // 에러 발생시
      console.error(error);
    });
    ws.on('close', () => { // 클라이언트가 연결 해제시
      console.log('클라이언트 접속 해제', ip);
      clearInterval(ws.interbal);
    });

    // 3초마다 클라이언트로 메세지 보내기
    ws.clearInterval = setInterval(() => {
      if (ws.readyState === ws.OPEN) {
        ws.send('서버에서 클라이언트로 메세지를 보냅니다.');
      }
    }, 3000);
  });
};
