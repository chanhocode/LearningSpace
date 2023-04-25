# Redux & MobX

### 1.redux
  - 리덕스 셋팅
  - action 생성기와 리듀서 사용
  - 불변성 유지와 subscribe 무엇인지
  - 간단 예제 작성

 ### 2.redux
  - 리덕스 폴더 구조 셋팅 (리듀서, 액션 분리_내부에서도 관련 요소끼리 나누어 분류)
  - combineReducer
  - redux Middleware & redux-thunk 구현

### 3.react-redux
  - 리액트 리덕스 연결

### 4.react-redux-immer
  - immer도입 하여 불변성 유지

### 5.toolkit
  - toolkit 사용시 thunk, immer등 내장라이브러리로 탑재되어 코드량 감소
  - 변수 이름이 확정(pending, fulfillde, rejected , payload) 되었다.
  - 인풋, 비동기 요청의 경우 리덕스를 쓰지 않는것 을 권장한다.

### 6.Redux-saga
  - saga를 쓰는 이유: 비동기적 요청을 하기 위헤서

    - 제네레이터: 함수 실행을 중간에 멈출 수 있고 원할 때 재개할수 있다. (function* () {})_무한의 개념을 처리할때와 비동기처리에서 주로 사용. 
      - takeLatest: 액션이 디스패치 되길 기다린 후 제네레이터 호출
  - 패턴:
        function actionAPI() {
          // 서버에 요청을 보내는 부분
        }
        function* action() {
          try {
            yield call(actionAPI);
            yield put({// put은 dispatch와 동일
             type: NAME_SUCCESS
            })
          } catch (e) {
            console.error(e);
            yiled put({
              type: NAME_FAILURE,
            })
          }
        }
        function* watchAction() {
          yilde takeLetest(NAME, action);
        }
        export default function* userSaga() {
          yiled all([
            fork(watchAction)
          ])
        }
        // call은 함수 동기적 호출 fork는 함수 비동기적 호출 put은 액션 dispatch