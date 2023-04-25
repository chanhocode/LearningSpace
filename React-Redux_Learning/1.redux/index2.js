const { createStore } = require('redux');

// 예제

const reducer = (prevState, action) => {
  // 새로운 state 생성
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    case 'ADD_POST':
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};
const initialState = {
  user: null,
  posts: [],
};

// createStore(reducer_함수 자리, initialState)
const store = createStore(reducer, initialState);

console.log('1st', store.getState());

//action _ (type = action Name)
const logIn = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  };
};

// test (화면에서 동작 가정)

store.dispatch(
  logIn({
    id: 1,
    name: 'chanho',
    admin: true,
  })
);
console.log('2st', store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: 'Hello',
  })
);
console.log('3st', store.getState());

store.dispatch(logOut());
console.log('4st', store.getState());
