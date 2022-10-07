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
            nickname: 'chanho_Nic',
          })
        );
      }, 2000);
    } catch (err) {
      dispatch(loginInFailure());
    }
  };
};

// sync action creator
const logInRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};
const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  };
};
const loginInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

module.exports = {
  logIn,
  logOut,
};
