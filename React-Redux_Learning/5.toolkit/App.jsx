import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const { addPost } = require('./actions/post');

const { logIn } = require('./actions/user');
const userSlice = require('./reducers/user');

const App = () => {
  const user = useSelector((state) => state.user);
   const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: 'chanho',
        password: '비밀번호',
      })
    );
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  // const onAddPost = useCallback(() => {
  //   dispatch(addPost());
  // }, []);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        '로그인 해주세요.'
      )}
      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
      {/* <button onClick={onAddPost}>게시글 작성</button> */}
    </div>
  );
};

export default App;
