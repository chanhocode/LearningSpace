// any
// 특정 변수의 타입을 모를때 지정하는 타입
let anyVar: any = 10;
anyVar = 'Hello, World!';

let num: number = 10;
num = anyVar; // 런타임에서 에러 발생

// unknown
// any와 유사하지만, any보다는 타입 안정성이 높다.
let unknownVar: unknown = 10;
unknownVar = 'Hello, World!';
unknownVar = 123;
// num = unknownVar; // 오류 발생
// 타입 정제
if (typeof unknownVar === 'number') {
  num = unknownVar;
}
