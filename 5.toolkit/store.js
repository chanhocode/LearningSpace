const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit');

// toolkit 사용시 코드의 길이를 많이 줄일 수 있다.(내장 라이브러리)

const reducer = require('./reducers');
// const { addPost } = require('./actions/post');
// const { logIn, logOut } = require('./actions/user');

const firstMiddleware = (store) => (next) => (action) => {
  console.log('로깅', action);
  next(action);
};

// thunk내장
// const thunkMiddleware = (store) => (next) => (action) => {
//   if (typeof action === 'function') {
//     // 비동기
//     return action(store.dispatch, store.getState);
//   }
//   return next(action); // 동기
// };
// const enhancer =
//   process.env.NODE_ENV === 'production'
//     ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
//     : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));
// const store = createStore(reducer, initialState, enhancer);

const store = configureStore({
  reducer,
  // 기존방식: middleware: [firstMiddleware, ...getDefaultMiddleware()],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firstMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
// toolkit 사용시 reducer만 연결하면 thunk, immer등 사용 가능

module.exports = store;
