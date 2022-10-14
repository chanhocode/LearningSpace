// action폴더는 비동기 action의 공간
const { createAsyncThunk } = require('@reduxjs/toolkit');

// server 대신 비동기 코드를 테스트 하기위한 함수
const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

// pending(로딩_기존: loadding), fulfilled(성공_기존: success), rejected(에러_기존: failure)
// async를 쓰면 보통 try-catch로 감싸지만, toolkit의 경우 감싸지 않는다. 이유: try-catch를 쓰면 코드에서 에러가 발생하지 않는다.
// 에러가 발생해야 thunk가 rejected상태로 가기떄문에 (에러가 없으면 thunk가 성공상태로 간다. )
const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  console.log(data); // data는 client에서 dispatch할때 주는 data
  // 비동기 요청
  const result = await delay(500, {
    userId: 1,
    nickname: 'chanho',
  });
  return result;
});

// const logIn = (data) => {
//   // async action creator
//   return (dispatch, getState) => {
//     // async action
//     dispatch(logInRequest(data));
//     try {
//       setTimeout(() => {
//         dispatch(
//           logInSuccess({
//             userId: 1,
//             nickname: 'chanho',
//           })
//         );
//       }, 2000);
//     } catch (e) {
//       dispatch(logInFailure(e));
//     }
//   };
// };
// const logInRequest = (data) => {
//   return {
//     type: LOG_IN_REQUEST,
//     data,
//   };
// };
// const logInSuccess = (data) => {
//   return {
//     type: LOG_IN_SUCCESS,
//     data,
//   };
// };
// const logInFailure = (error) => {
//   return {
//     type: LOG_IN_FAILURE,
//     error,
//   };
// };

module.exports = {
  logIn,
};
