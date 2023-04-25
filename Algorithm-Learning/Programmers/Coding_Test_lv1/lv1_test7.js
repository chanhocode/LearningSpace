// 평균 구하기
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 나의 코드
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return (answer /= arr.length);
}

// test
console.log(solution([1, 2, 3, 4]));

// 일반 적인 코드
function average(array){
  //함수를 완성하세요

  var sum = 0;
  for(var i=0; i<array.length; i++)
    sum += array[i];
  return sum/array.length;
}

// ES6 문법 활용
function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}

// Array.reduce()
/*
  배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.
  arr.reduce(callback[, initialValue])

  callback: 배열의 각 요소에 대해 실행할 함수, 네가지 인수를 가진다.
    - accumulator: 누산기, 반환값을 누적, 콜백의 첫번째 호출
    - currentValue: 처리할 현재 요소
    - currentIndex: 처리할 현재 요소의 인덱스(initialValue를 제공한 경우 0, 아니면 1부터 시작)
    - array: reduce()를 호출한 배열
  initialValue: 콜백 최초 호출에서 첫 번째 인수에 제공하는 값, 초기값을 제공하지 않으면 배열의 첫번째 요소를 사용.
*/