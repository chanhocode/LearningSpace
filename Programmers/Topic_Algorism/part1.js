// 자릿수 더하기.
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 나의 코드
function solution(n) {
  var answer = 0;
  var key = n;
  while (true) {
    answer += key % 10;
    key -= key % 10; // 불필요한 코드 : ex) 123 / 10 = 12 이므로,
    if (key === 0) {
      // whiledml 조건이 n>0 으로 주면 필요하지 않은 코드 이다.
      break;
    }
    key /= 10;
  }
  return answer;
}

// 해설 :: 자바 코드
// using namespace std;
// int solution(int n)
// {
//     int sum = 0;
//     while(n>0)
//     {
//         sum += n % 10;
//         n /= 10;
//     }
//     return sum;
// }

// 인상 깊은 다른 코드
function solution(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((sum, val) => {
      return sum + val;
    });
}
