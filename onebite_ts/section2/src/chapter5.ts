// Enum
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용할 수 있게 하는 타입

enum Role {
  Admin = 0,
  User = 1,
  Guest = 2,
}

const user1 = {
  name: 'Neo',
  role: Role.Admin, // 0: 관리자
};

const user2 = {
  name: 'Trinity',
  role: Role.User, // 1: 사용자
};

const user3 = {
  name: 'Morpheus',
  role: Role.Guest, // 2: 게스트
};
