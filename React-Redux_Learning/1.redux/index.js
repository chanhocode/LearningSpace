const { createStore } = require('redux');

const reducer = (prevState, action) => {
  // 새로운 state 생성
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        // 스프레드 이용해서 기존 코드 얕은 복사후, 변경 (불변성 유지)
        ...prevState,
        compA: action.data,
      };
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data,
      };
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};
const initialState = {
  compA: 'a',
  compB: 12,
  compC: null,
};

// createStore(reducer_함수 자리, initialState)
const store = createStore(reducer, initialState);

store.subscribe(() => {
  // react-redux안에 기본 내장 (리액트 사용시 사용을 잘안함)
  // 화면을 바꿔주는 코드
  console.log('changed');
});

console.log('1st', store.getState());

//action _ (type = action Name)
const changeCompA = (data) => {
  // 함수 자체가 액션이 아닌 리턴 하는 객체가 액션
  // 함수를 통해 동적으로 액션 생성( 함수는 액션을 만들어내는 크리에이터 이다. )
  return {
    type: 'CHANGE_COMP_A',
    data,
  };
};

/* 
  store.dispatch({
    type: 'CHANGE_COMP_A,
    data: 'b',
  })
  아래코드와 동일
*/
store.dispatch(changeCompA('b'));
console.log('2st', store.getState());
