// follow() 에서 DB를 호출하기 떄문에 "cannot convert undefined or null to object"가 발생
jest.mock('../models/user'); // 위 에러를 해결하기 위해
const User = require('../models/user');
const { follow } = require('./user');

describe('follow', () => {
  test('사용자를 찾아 팔로잉을 추가하고 sucess를 응답해야한다.', async () => {
    const res = {
      send: jest.fn(),
    };
    const req = {
      user: { id: 1 },
      params: { id: 2 },
    };
    const next = jest.fn();
    // jest.mock()을 통해 findOne.mockReturnValue() 생성
    User.findOne.mockReturnValue({
      addFollowing(id) {
        return Promise.resolve(true);
      },
    });
    await follow(req, res, next);
    expect(res.send).toBeCalledWith('success');
  });
  test('사용자를 못 찾으면 res.status(404).send(no user)를 호출', async () => {
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    const req = {
      user: { id: 1 },
      params: { id: 2 },
    };
    const next = jest.fn();
    User.findOne.mockReturnValue(null);
    await follow(req, res, next);
    expect(res.status).toBeCalledWith(400);
    expect(res.send).toBeCalledWith('no user');
  });
  test('DB에서 에러가 발생하면 next(error)를 호출한다.', async () => {
    const res = {};
    const req = {
      user: { id: 1 },
      params: { id: 2 },
    };
    const next = jest.fn();
    const message = 'DB Error';
    User.findOne.mockReturnValue(Promise.reject(message));
    await follow(req, res, next);
    expect(next).toBeCalledWith(message);
  });
});
