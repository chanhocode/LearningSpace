const { createAsyncThunk } = require('@reduxjs/toolkit');
// server 대신 비동기 코드를 테스트 하기위한 함수
const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const addPost = createAsyncThunk('post/add', async () => {
  return await delay(500, {
    title: 'New POST',
    content: 'contentcontent...',
  });
});

module.exports = {
  addPost,
};
