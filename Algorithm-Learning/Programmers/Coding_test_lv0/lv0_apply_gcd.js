// 분수의 덧셈

// 나의 풀이
function solution(denum1, num1, denum2, num2) {
  const getGcd = (a, b) => (b > 0 ? getGcd(b, a % b) : a);
  let answer = [];
  answer[0] = denum1 * num2 + denum2 * num1;
  answer[1] = num1 * num2;
  const gcd = getGcd(answer[0], answer[1]);
  const result = answer.map((a) => a / gcd);
  return result;
}

// test code
solution(1,2,3,4) // [5,4]

// 인상 깊은 코드
function fnGCD(a, b){
  return (a%b)? fnGCD(b, a%b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1*num2 + denum2*num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum/gcd, num/gcd];
}