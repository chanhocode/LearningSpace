// 콜라츠 추측
/*
주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
  1-1. 입력된 수가 짝수라면 2로 나눕니다.
  1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
  2. 결과로 나온 수에 같은 작업을 1일 될 때까지 반복합니다.
단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
*/

// 나의 코드
function solution(num) {
  let count = 0;
  let checkNum = num;
  if (checkNum === 1) {
    return 0;
  }
  while (true) {
    switch (checkNum % 2) {
      case 0:
        checkNum /= 2;
        break;
      default:
        checkNum = checkNum * 3 + 1;
        break;
    }
    count += 1;
    if (checkNum === 1 || count >= 500) {
      if (checkNum === 1) {
        break;
      } else {
        count = -1;
        break;
      }
    }
  }
  return count;
}

// test
const test = 16;
console.log(solution(test)); // 4

// 일반 적인 코드
function collatz(num) {
  var answer = -1;

  var count = 0;

  while (++count <= 500) {
    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num = num / 2;
    }

    if (num == 1) {
      return count;
    }
  }

  return answer;
}
// 코드 2
function collatz(num) {
  var answer = 0;
  do {
    if (num % 2 == 0) {
      num = num / 2;
      answer++;
    } else if (answer > 500) {
      answer = -1;
      break;
    } else {
      num = num * 3 + 1;
      answer++;
    }
  } while (num != 1);
  return answer;
}
// 코드 3
function solution(num) {
  let counter = 0;
  while (num !== 1) {
    if (counter++ === 500) return -1;
    num = num % 2 ? num * 3 + 1 : num / 2;
  }
  return counter;
}

// 인상적인 코드
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
