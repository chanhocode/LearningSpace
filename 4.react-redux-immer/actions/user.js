const {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} = require('../reducers/user');

const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'chanho',
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

const logOut = () => {
  return {
    // action
    type: LOG_OUT,
  };
};

module.exports = {
  logIn,
  logOut,
};
