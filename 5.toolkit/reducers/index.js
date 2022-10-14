const { combineReducers } = require('redux');
// Slice 도입
const userSlice = require('./user');
const postSlice = require('./post');
// toolkit사용시 동기액션의 경우 action을 따로 만들지 않아도 된다.
// slice는 reducer과 action을 묶어 놓은 것으로 그 중 reducer을 연결해준다.
module.exports = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer,
});
