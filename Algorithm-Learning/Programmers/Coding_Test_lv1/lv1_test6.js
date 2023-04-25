// 하샤드 수
/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 
18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

// 나의 코드
function solution(x) {
  if (x === 10000) return true;
  let index = [];
  let num = x;
  let inum = 0;
  while (true) {
    if (num < 10) {
      index.push(num);
      break;
    } else if (num < 100) {
      inum = parseInt(num / 10);
      index.push(inum);
      num -= inum * 10;
      continue;
    } else if (num < 1000) {
      inum = parseInt(inum);
      index.push(inum);
      num -= inum * 100;
      continue;
    } else {
      inum = parseInt(num / 1000);
      index.push(inum);
      num -= inum * 1000;
      continue;
    }
  }

  let sum = 0;
  index.map((num) => (sum += num));
  let answer = x % sum === 0 ? true : false;
  return answer;
}

// test
console.log("test1: ", solution(15));

// 일반적인 답안 :: 형변환 이용 ns::num->str ==> sum::str->num
function Harshad(n) {
  var result;
  var ns = n + "",
    sum = 0;
  for (var i = 0; i < ns.length; i++) {
    sum += ns[i] * 1;
  }
  result = n % sum == 0 ? true : false;

  return result;
}

// 인상깊은 답안
function solution(x) {
  var a = 0;
  var s = (x + "").split("").map(Number);

  for (let i of s) {
    a += i;
  }

  return x % a == 0 ? true : false;
}

function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
