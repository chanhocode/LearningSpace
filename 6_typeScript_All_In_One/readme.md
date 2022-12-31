# TypeScript All in One

## 기본 지식

- typescript는 최종적으로 javascript로 변환된다.
- typescript는 언어이면서 컴파일러(tsc)이다.
- ts 파일을 실행하는게 아닌 결과물인 js를 실행한다.

- Setting: npm init -y -> npm i typescript -> npx tsc --init (tsconfig.json 생성)
- "allowJs": true, : typescript와 javascript를 동시에 사용가능
- strict옵션은 항상 true유지하는 것을 권장

- type검사: ' npx tsc --noEmit '

## 기본 문법

1. 타입 자리

```typescript
// 소문자 이어야함
const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
// 고정된 원시값
const ab: 5 = 5;
const cd: true = true;
// 모든 타입 사용 가능
const f: any = all;
// null, undefined가 아닌 모든 타입
const g: {} = 123;

// Object
const obj: { lat: number; lon: number } = { lat: 37, lon: 127 };
// Array
const arr1: string[] = ['a', 'b'];
const arr2: number[] = [1, 2];
// +) 제네릭
const arr3: Array<number> = [1, 2];
// Tuple: 길이가 고정된 배열
const arr4: [number, number, string] = [1, 2, '3'];
```

- 타입 스크립트의 주 목적은 'any'를 없애는 것

- 매개변수 & return 타입 자리

```typescript
// 선언(1)
function add(x: number, y: number): number {
  return x + y;
}
// 함수 선언식과 화살표 함수의 리턴 타입 위치 조심
type Add = (x: number, y: number) => number;
const add: Add = (x, y) => x + y;
// const add: (x:number, y: number) => number = (x, y) => x + y;
// 선언(2) _ interface
interface Add {
  (x: number, y: number): number;
}
const add: Add = (x, y) => x + y;
선언(3);
function add(x: number, y: number): number;
function add(x, y) {
  return x + y;
}
```

- 타입 자리를 쉽게 구분 하는 방법: 클론뒤에 타입부분을 지웠을 때 자바스크립트로 동작 되어야함

- 타입 강제 변환

```typescript
let aa = 123;
aa = 'hello' as unknown as number;
```

2. never TYPE

- nerver 타입의 값은 공집합이다. 집합에 어떤 값도 없기 때문에, any타입의 값을 포함해 어떤 값도 가질 수 없다.

```typescript
declare const any: any;
const never: never = any; // error
```

- 불가능을 나타내는 타입

3. ! (반드시 있다.)

- ! 대신 if를 쓰는 것을 권장

```typescript
const head = document.querySelector('#head')!;

const head = document.querySelector('#head');
if (head) {
  console.log(head);
}
```

4. type 키워드

- 타입을 커스텀 할 수 있다.

```typescript
type World = 'world';
const a: World = 'world';

type Greetinf = `hello ${World}`;
// return: hello world
```

5. enum : 열거 하는 타입

```typescript
// javascript에 남지 않음
const enum EDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
const a = EDirection.Up;
const c = EDirection.Left;

// javascript에 남음
const ODirectionA = {
  Up: 0, // 0
  Down: 1, // 1
  Left: 2, // 2
  Right: 3, // 3
} as const;
// 위와 동일
const ODirectionA: { Up: 0; Down: 1; Left: 2; Right: 3 } = {
  Up: 0, // 0
  Down: 1, // 1
  Left: 2, // 2
  Right: 3, // 3
};
```

6. typeof, keyof

```typescript
const obj = { a: '123', b: 'hello', c: 'world' };
// a, b, c 만 가져오기
const obj = { a: '123', b: 'hello', c: 'world' };
// 값을 타입으로 쓰고 싶을때 typeof사용
type Key = keyof typeof obj; // type Key = 'a' | 'b' | 'c'
/* type obj
const obj: {
  a: string;
  b: string;
  c: string;
}
*/

// value 가져오기
const obj = { a: '123', b: 'hello', c: 'world' } as const;
type Key = typeof obj[keyof typeof obj]; // type Key = '123' | 'hello' | 'world'
```
