# 자바스크립트로 알아보는 함수형 프로그래밍 ES5

# chapter1. 함수형으로 전환하기

## 1. map, filter

```
var users = [
  { id: 1, name: 'ID', age: 36},
  { id: 2, name: 'BJ', age: 32},
  { id: 3, name: 'JM', age: 32},
  { id: 4, name: 'PJ', age: 27},
  { id: 5, name: 'HA', age: 25},
  { id: 6, name: 'JE', age: 26},
  { id: 7, name: 'JI', age: 31},
  { id: 8, name: 'MP', age: 23},
]
```

- 30세 이상인 users를 거른다.

```
// 1. 명령형 코드
const temp_users =[];
for(let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}

// 2. _filter 리팩토링 _ (응용형 함수) _ 다형성 & 재활용성이 높아짐
function _filter(users, predi) {
  var new_list = [];
  for(let i = 0; i < users.length; i++) {
    if (predi(users[i])) {
      new_list.push(users[i]);
    }
  }
  return new_list;
}
console.log(_filter(users, () => user.age >= 30);
```

- 30세 이상인 users의 names를 수집한다.

```
// 1.명령형 코드
const names = [];
for(let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
console.log(names);

// 2. _map 리팩토링
function _map(list, mapper) {
  const new_list = [];
  for(let i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}
let over_30 = _filter(users, (user) => user.age >= 30);
let names = _map(over_30, (user) => user.name);
console.log(names);
```

### 1. 응용형 함수 또는 고차함수

: 함수가 함수를 받아서 원하는 시점에 해당하는 함수가 알고있는 인자를 적용하며 프로그램 하는 함수

### 2. 함수형 프로그래밍의 특징

1. 다형성과 재활용성이 높다.
2. 관심사가 완전히 분리되며, 데이터형이 어떻게 생겼는지 보이지 않는다.

### 3. 중복제거 each

```
function _filter(users, predi) {
  var new_list = [];
  _each(list, function(value){
    if (predi(value)) {
      new_list.push(value);
    }
  });
  <!--
    for(let i = 0; i < users.length; i++) {
    if (predi(users[i])) {
      new_list.push(users[i]);
    }
  } -->
  return new_list;
}
function _map(list, mapper) {
  const new_list = [];
  _each(list, function(value) {
    new_list.push(mapper(value));
  });
  <!-- 제거
    for(let i = 0; i < list.length; i++) {
    new_list.push(napper(list[i]));
  } -->
  return new_list;
}
function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}

```

### 4. 메서드 map, filter과의 차이점

- 자바스크립트에 기존적으로 있는 map, filter은 정확히 정의하자면 함수가 아닌 메서드 이다.
  // 함수가 아니라 메서드라는 말은 즉, 순수함수가 아니고 \_ 메서드는 객체 상태에 따라 결과가 달라지는 특징을 가지고 있다.
- 메서드의 특징은 해당클래스에 정의되어있기 떄문에 해당클래스의 인스턴스에서 만 사용 가능하다. (내부 map과 filter은 Array에서만 사용 가능하다.)

```
console.log(document.querySelectorAll('*').map(function(node){ return node.nodeName }));
-> error 발생 _ document.querySelectorAll의 결과가 배열이 아니기 때문에

// 위에서 만든 코드 이용
_map(document.querySelectorAll('*'), function(node) {
  return node.nodeName;
})
-> 동작
```

## 2. 커링,curry,curryr

1. 커링: 함수와 인자를 다루는 기법, 함수에 인자를 하나씩 적용하다가 필요한 인자가 채워지면 함수 본체를 실행하는 기법
2. curryr: 인자를 왼쪽부터가 아닌 오른쪽에서부터 적용

```
// ( 본체함수를 값으로 들고있다가 원하는 시점에 최종적으로 평가하는 기법 )
// _curry, _curryr
function _curry(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    }
  }
}
// 3항연산자 이용 최적화 및 curryr구현
function _curryr(fu) {
  return function(a, b) {
    return argument.length == 2 ? fn(a, b) : function(b) { return fn(b,a);};
  }
}
// 사용 예제
let add = _curry(function(a, b){
  return a+b;
})
let add10 = add(10);
console.log(add10(5));
console.log(add(5)(3));
```

## 3. get

```
function _get(obj, key) {
  return obj == null ? undefined : [key];
}

let user1 = users[0];
console.log(_get(user1, 'name'));

console.log(users[10].name); -> 없는 값이므로 에러 발생
console.log(_get(users[10], 'name')); -> undefined 반환
```
