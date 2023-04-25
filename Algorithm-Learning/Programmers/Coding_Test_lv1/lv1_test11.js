// 약수의 합

//정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 나의 코드
function solution(n) {
  var answer = 0;
  for(let i = 1; i <= n; i++) {
      if (n%i === 0) {
          answer+=i
      }
  }
  return answer;
}

// test
console.log(solution(12)); // 28

// 인상 깊은 코드
function solution(n, a=0, b=0) {
    return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
}