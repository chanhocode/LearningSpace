// 단위 테스트 _ if문을 기점으로 생성
const { isLoggedIn, isNotLoggedIn } = require('./');

// 비슷한 테스트 끼리는 describe로 묶을 수 있다.
describe('isLoggedIn', () => {
  // 테스트용 모킹 _ req, res, next
  // 공통 코드는 위에서 선언 가능
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  const next = jest.fn();
  test('로그인이 되어있으면 isLoggedIn이 next를 호출해야한다.', () => {
    const req = {
      // jest.fn() 에서 콜백 함수를 통해 원하는 값을 리턴해줄 수 있다.
      isAuthenticated: jest.fn(() => true),
    };
    isLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1);
  });
  test('로그인이 되어 있지 않으면 isLoggedIn이 에러를 응답.', () => {
    const req = {
      isAuthenticated: jest.fn(() => false),
    };
    isLoggedIn(req, res, next);
    expect(res.status).toBeCalledWith(403);
    expect(res.send).toBeCalledWith('로그인이 필요');
  });
});

describe('isNotLoggedIn', () => {
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
    redirect: jest.fn(),
  };
  const next = jest.fn();
  test('로그인이 되어 있지 않으면 isNotLoggedIn이 next를 호출해야한다.', () => {
    const req = {
      isAuthenticated: jest.fn(() => false),
    };
    isNotLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1);
  });
  test('로그인이 되어있으면 isNotLoggedIn이 에러를 응답.', () => {
    const req = {
      isAuthenticated: jest.fn(() => true),
    };
    isNotLoggedIn(req, res, next);
    const message = encodeURIComponent('로그인한 상태입니다.');
    expect(res.redirect).toBeCalledWith(`/?error=${message}`);
  });
});
