// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['a', 'b', 'c'];
let boolArr: boolean[] = [true, false, true];
let boolArr2: Array<boolean> = [true, false, true]; // 제네릭 문법 사용
let undefinedArr: undefined[] = [undefined, undefined];
let nullArr: null[] = [null, null];

// 배열 요소 타입 다양한 경우
let multiArr: (number | boolean | string)[] = [1, true, 'hello']; // | 유니온 타입
let multiArr2: Array<number | boolean | string> = [1, true, 'hello']; // 제네릭 문법 사용

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플 : 타입스크립트에서만 제공
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [string, boolean] = ['hello', true];

tup1.push(1);
tup1.pop();
tup1.pop();

const users: [string, number][] = [
  ['chanho', 1],
  ['hyebin', 2],
];
