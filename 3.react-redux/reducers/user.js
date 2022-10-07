const initialState = {
  isLoggingIn: false,
  data: null,
};

// 추후 유지보수를 위해 상수로 변수를 저장.
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

const userReducer = (prevState = initialState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...prevState,
        data: null,
        isLoggingIn: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...prevState,
        data: action.data,
        isLoggingIn: false,
      };
    case LOG_IN_FAILURE:
      return {
        ...prevState,
        data: null,
        isLoggingIn: false,
      };
    case LOG_OUT:
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

module.exports = userReducer;
