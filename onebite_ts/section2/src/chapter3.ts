// object 타입
let user: object = {
  id: 1,
  name: 'chanho',
};
// user.id; object로 타입을 정의하면 . 키워드로 접근이 안됨

// 객체 리터럴 타입
let user2: { id: number; name: string } = {
  id: 1,
  name: 'chanho',
};
user2.id;

let user3: {
  id?: number; // 옵셔널 프로퍼티
  name: string;
} = {
  name: 'hyebin',
};

let config: {
  readonly apikey: string; // 읽기 전용 프로퍼티
} = {
  apikey: '1234',
};
// config.apikey = '5678'; // 읽기 전용이므로 에러 발생
