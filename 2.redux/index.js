const { createStore } = require('redux');
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');
const { compose } = require('redux');
const { applyMiddleware } = require('redux');

const initialState = {
  // 연관이 있는 요소는 묶어서 분류
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  // 배열같은 규모가 커질 가능성이 있는 요소는 따로 분류
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

// enhancer__store의 기능을 덧붙이다. 미들웨어를 이용해 기존 리덕스에서 할 수 없는 기능을 증강 시키다. // ( next = dispatch )
const firstMiddleware = (store) => (next) => (action) => {
  console.log('__action Logging: ', action);
  // 기능 추가
  next(action);
  console.log('__action End');
  // 기능 추가 __ dispatch action 전 후로 기능을 추가 할 수 있어진다. 이를 활용하여 비동기 처리도 가능.
};
/* 위 코드와 동일
  function firstMiddleware() {
    return function (next) {
      return function (action) {

      }
    }
  }
*/
const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    // 비동기(비동기인경우 액션을 함수로 넣어주겠다.)
    return action(store.dispatch, store.getState);
  }
  return next(action);
};
// compose는 합성하는 함수, 추 후 플러그인을 추가 할때 compose를 이용해 함수를 합성 시킬 수 있다. 추가 할 함수가 없을 경우
// const enhancer = applyMiddleware() 만 사용 가능.
const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware));

// createStore(리듀서 자리, 초기 state 자리, enhancer 자리)
const store = createStore(reducer, initialState, enhancer);
console.log('1st', store.getState());

// ----- test (화면에서 동작 가정)

store.dispatch(
  logIn({
    id: 1,
    name: 'chanho',
    admin: true,
  })
);
// console.log('2st', store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: 'Hello',
//   })
// );
// console.log('3st', store.getState());

// store.dispatch(logOut());
// console.log('4st', store.getState());
