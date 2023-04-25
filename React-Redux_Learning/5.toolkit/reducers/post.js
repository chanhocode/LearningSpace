const { createSlice } = require('@reduxjs/toolkit');
const { addPost } = require('../actions/post');

const initialState = {
  list: [],
};

// reducers: 동기적 || 내부적
// extraReducers: 비동기적 || 외부적
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearPost(state, action) {
      state.data = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addPost.pending, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {}),
});

module.exports = postSlice;
