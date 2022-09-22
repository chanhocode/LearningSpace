// 짝수와 홀수

// 정수가 짝수일 경우 "Even"을 반환 홀수인 경우 "Odd"를 반환

// 나의 코드
function solution(num) {
  return (num % 2 === 0 ? "Even" : "Odd");
}

// test
console.log(solution(2));
console.log(solution(3));

// 인상 깊은 코드
/**
 * 0은 false라는 것을 이용한 짝수, 홀수 구분 함수
 * @param {*} num 
 * @returns 
 */
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
