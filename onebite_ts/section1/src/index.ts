// import { func } from './test';
// func('hi');

// 블록 범위 변수를 다시 선언할 수 없습니다.
const a = 1;
// 타입스크립트는 파일들을 전역 모듈로 보기 때문에 이러한 문제가 발생합니다.
// 해결 방법(1)
// export {};
// 해결 방법(2): 옵션사용 moduleDetection
