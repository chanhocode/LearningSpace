// 최대공약수, 최소공배수
/*
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3,
최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
*/

// 나의코드
function solution(n, m) {
  let numerator = Math.max(n, m);
  let dividend = Math.min(n, m);
  let rest = 1;
  while (rest !== 0) {
    rest = numerator % dividend;
    numerator = dividend;
    dividend = rest;
  }
  let lcm = (n * m) / numerator;
  return [numerator, lcm];
}
// test
console.log(solution(2, 5));

// 코드1
function gcdlcm(a, b) {
  var gcd = function (b, a) {
    var r = b % a;
    return r ? gcd(a, r) : a;
  };
  return [gcd(b, a), (b * a) / gcd(b, a)];
}

// 코드2
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
// true/false 조건을 (r=a%b) 로 판별, 0이 나오면 for문 종료

// 유클리드 호제법
/*
2개의 자연수  a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면 (단 a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
이 성질에 따라, b를 r로 나눈 나머지 r0를 구하고, 다시 r을 r0로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때
나누는 수가 a와 b의 최대공약수이다. 이는 명시적으로 기술된 가장 오래된 알고리즘으로서도 알려져 있으며, 기원전 300년경에 쓰인 
유클리드의 <원론> 제7권, 명제 1부터 3까지에 해당한다. 
*/
