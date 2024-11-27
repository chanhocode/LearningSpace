// 원시타입
// number: 숫자 타입 / : number 이런식으로 적는 것은 타입 주석 또는 타입 어노테이션 이라고 부른다.
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = Infinity;
let num5: number = NaN;
num1.toFixed();

// string: 문자열 타입
let str1: string = 'hello';
let str2: string = `hello ${num1}`;
str1.toUpperCase();

// boolean: 불리언 타입
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// let numA: number = null; "strictNullChecks": false,를 tsconfig.json에 추가해야 에러가 나지 않는다.

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
// numA = 20; // 에러 발생
let strA: 'hello' = 'hello';

let boolA: true = true;
