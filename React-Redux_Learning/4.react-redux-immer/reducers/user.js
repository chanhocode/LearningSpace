const { produce } = require('immer');

const initialState = {
  isLoggingIn: false,
  data: null,
};

// 추후 유지보수를 위해 상수로 변수를 저장.
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

// immer의 기본 형태 _ produce함수는 이전 상태를 바탕으로 액션을 받아서 다음 상태를 만들어 낸다.
// nextState = produce(prevState, (draft) => {})
const userReducer = (prevState = initialState, action) => {
  // draft는 쉽게 복사본
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case LOG_OUT:
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

module.exports = userReducer;
