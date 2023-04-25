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

7. union( | ), intersection( & )

- union (OR) string | number // 문자열 또는 숫자
- intersection (AND)

```typescript
// intersection
type A = { hello: 'world' } & { zero: 'cho' };
// 둘다 가지고 ( 만족해야 ) 있어야 한다.
const a: A = { hello: 'world', zero: 'cho' };
const a: A = { hello: 'world' }; // error
// union
type A = { hello: 'world' } & { zero: 'cho' };
// 둘중 하나만 만족해도 된다.
const a: A = { hello: 'world' }; // ok
```

8. 상속(extends)

```typescript
// type  상속
type A = { a: true };
type B = A & { c: true };
type C = B & { b: true };

const D: C = { a: true, b: true, c: true };

// interface 상속
interface A {
  a: true;
}
interface B extends A {
  b: true;
}
const C: B = { a: true, b: true };
```

9. 잉여속성 검사

```typescript
interface A {
  a: srting;
}
const obj1: A = { a: 'hello', b: 'world' }; // error
// 해결 _ 따로 변수로 정의
const obj = { a: 'hello', b: 'world' };
const obj1: A = obj;
```

10. void

```typescript
// 함수에서의 void _ (1) 리턴 값이 없다.
function():void{return undefined};
// 매개변수에서의 void _ (2) 리턴 값을 사용하지 않겠다.
function a(() => void) {};
// 메서드에서의 void _ (2) 리턴 값을 사용하지 않겠다.
interface A { a: () => void};

const B: A = {
  a() {reuturn 'abc'}
}
```

11. 타입가드

```typescript
function numOrStr(a: number | strting) {
  if (typeof a === 'number') {
    a.toFixed(1);
  }
  if (typeof a === 'string') {
    a.charAt(3);
  }
}
numOrStr('123');
numOrStr(1);

// class는 그자체로 타입이 될 수 있다.
class A {
  aaa() {}
}
class B {
  bbb() {}
}
function aOrB(A | B) {
  if(param instanceof A) {
    param.aaa();
  }
}
aOrB(new A());
aOrB(new B());
```

- 커스텀 타입 가드 (is)

```typescript
interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
// is 가 있어야 if문 안에서 구별을 해준다.
function catOrDog(a: Cat | Dog): a is Dog {
  // 타입 판별
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}
function per(a: Cat | Dog) {
  if (catOrDog(a)) {
    // if ('meow' in a) {}
    console.log(a.bow);
  }
}
```

12. readonly

- 읽기 전용

```typescript
interface A {
  readonly a: string;
}
const aaaa: A = { a: 'hello' };
aaaa.a = '123'; // error
```

13. 인덱스트 시그니처, 맵드 타입스

```typescript
// 키가 전부다 문자열이고 그 값도 문자열이다.
type A = { [key: string]: string };
const aaaa: A = { a: 'a', b: 'b' };

// "맵드 타입스" :: 키가 ... 중에
typq B = 'A' | 'B' | 'C';
type A = { [key in B]: number}
const bbbb: A = {A: 1, B:2, C:3}
```

14. private, protected

```typescript
interface A {
  readonly a: string;
  b: string;
}
class B implements A {
  private a: string; // class B 안에서만 사용 가능
  protected b: string; // 상속받은 클래스 안에서 사용 가능
}
class C extends B {
  method() {
    console.log(this.b); // ok
  }
}
new C().a; // error
new C().b; // error
```

14. 옵셔널, 제네릭

```typescript
// 옵셔널 (?) 있을수도 없을 수도 있다.
function abc(a: number, b?: number) {}
abc(1); // ok
abc(1, 2); // ok
abc(1, 2, 3); // error

// 제네릭
// 제네릭은 타입에 대한 함수
function add<T>(x: T, y: T) {
  return x + y;
}
add<number>(1, 2);
add(1, 2);
add<string>('1', '2');
add('1', '2');
add(1, '2');

// extends 제한
function add<T extends string>(x: T, y: T) {
  return x + y;
}
add<number>(1, 2); // error
add(1, 2); // error
add<string>('1', '2'); // ok
add('1', '2');
add(1, '2'); // error
```

## lib.es5.d.ts 분석

1. forEach, map 제네릭 분석

```typescript
interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  map<U>(callbackfn: (value: T, index:number, array: T[] => U, thisArg?: any): U[]);
}

// T( '<number>' )가 넘어가면서 타입을 정의
const a: Array<number> = [1, 2, 3];
a.forEach((value) => {
  console.log(value);
}); // 1, 2, 3

// map<U>(callbackfn: (value: number, index:number, array: number[] => U, thisArg?: any): U[]);
// item.toString() 리턴 값이 string 이므로 U는 string
const strings = [1,2,3].map((item) => item.toString()); // ['1', '2', '3'] string[]
```

2. filter 제네릭 분석

```typescript
interface Array<T> {
  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
  filter(
    predicate: (value: T, index: number, array: T[]) => unknow,
    thisArg?: any
  ): T[];
}

/*
  - T = number, 리턴값 number
  filter<S extends T>(
    predicate: (value: number, index: number, array: number[]) => value is number,
    thisArg?: any
  ): number[];
*/
const filtered = [1, 2, 3, 4, 5].filter((value) => value % 2); // number

const filtered2 = ['1', 2, '3', 4, '5'].filter(
  (value) => typeof value === 'string'
); // const filterted2: (stirng | number)
// 원하는 추론 ['1', '3', '5'] string[]
const predicate = (value: string | number): value is string =>
  typeof value === 'string';
const filtered3 = ['1', 2, '3', 4, '5'].filter(predicate);
```

3. forEach 타입 만들어 보기

```typescript
interface Arr<T> {
  forEach(callback: (item: T) => void): void;
}
const a: Arr<number> = [1, 2, 3];
a.forEach((item) => {
  console.log(item);
});
const b: Arr<string> = ['1', '2', '3'];
b.forEach((item) => {
  console.log(item);
});
```

4. map 타입 만들어 보기

```typescript
interface Arr<T> {
  map<S>(callback: (v: T) => S): S[];
}
const a: Arr<number> => [1, 2, 3];
// 리턴값이 string이므로 S는 string 이다.
const b: a.map((v) => v.toStirng()) // ['1', '2', '3']; string[]
```

5. filter타입 만들어 보기

```typescript
interface Arr<T> {
  filter<S extends T>(callback: (v: T) => v is S): S[];
}
const a: Arr<number> => [1, 2, 3];
const b = a.filter((v) => )
```