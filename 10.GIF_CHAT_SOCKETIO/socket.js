const SocketIO = require('socket.io');
const { removeRoom } = require('./services');
module.exports = (server, app, sessionMiddleware) => {
  const io = SocketIO(server, { path: '/socket.io' });
  // io는 기본 네임스페이스
  app.set('io', io); // io 객체를 express에 저장
  // of를 통해 다른 네임스페이스로 전환 가능
  const room = io.of('/room'); // room 네임스페이스
  const chat = io.of('/chat'); // chat 네임스페이스

  // socket은 (socket, next) 로 구성되어있는 socket.io를 express middleware 쓰듯이 wrap를 활용한 확장 할 수 있다.
  const wrap = (middleware) => (socket, next) =>
    //         (req, res, next)
    middleware(socket.request, {}, next);
  chat.use(wrap(sessionMiddleware));

  room.on('connection', (socket) => {
    console.log('room 네임스페이스 접속');
    socket.on('disconnect', () => {
      console.log('room 네임스페이스 접속 해제');
    });
  });

  chat.on('connection', (socket) => {
    console.log('chat 네임스페이스에 접속');
    socket.on('join', (data) => {
      socket.join(data); // 방에 참가
      socket.to(data).emit('join', {
        // 방 참가시 메시지
        user: 'system',
        chat: `${socket.request.session.color}님이 입장하셨습니다.`,
      });
    });

    socket.on('disconnect', async () => {
      console.log('chat 네임스페이스 접속해제');
      // 브라우저 주소: room/방아이디 형식으로 주소에서 아이디를 가져온다.
      const { referer } = socket.request.headers; // 전체 주소
      const roomId = new URL(referer).pathname.split('/').at(-1); // 방아이디
      const currentRoom = chat.adapter.rooms.get(roomId);
      const userCount = currentRoom?.size || 0; // 방에 현재 참가자
      if (userCount === 0) {
        // 방 참가자가 없으면 방 제거
        await removeRoom(roomId);
        room.emit('removeRoom', roomId);
        console.log('방제거 요청 성공');
      } else {
        socket.to(roomId).emit('exit', {
          // 방 퇴장시 메시지
          user: 'system',
          chat: `${socket.request.session.color}님이 나가셨습니다.`,
        });
      }
    });
  });
};
