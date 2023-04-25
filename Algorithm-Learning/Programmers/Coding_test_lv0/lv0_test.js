// 두수의 곱
function solution(num1, num2) {
  return num1 * num2;
}

// 두수의 차
function solution(num1, num2) {
  return num1 - num2;
}

// 두수의 합
function solution(num1, num2) {
  return num1 + num2;
}

// 숫자비교 하기
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

// 나머지 구하기
function solution(num1, num2) {
  return num1 % num2;
}

// 몫 구하기
const solution = (num1, num2) => parseInt(num1 / num2);

// 나이 출력
function solution(age) {
  return 2023 - age;
}
function solution(age) {
  return new Date().getFullYear() - age + 1;
}

// 각도기
function solution(angle) {
  if (0 < angle && angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (90 < angle && angle < 180) {
    return 3;
  } else {
    return 4;
  }
}
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// 두수의 나눗셈 _ 나누고 1000을 곱한후 정수부 출력
function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}
const solution = (num1, num2) => Math.floor((num1 / num2) * 1000);

// 짝수의 합
function solution(n) {
  answer = 0;
  for (i = 2; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

// 배열의 평균값
function solution(numbers) {
  return numbers.reduce((a, b) => a + b) / numbers.length;
}

// 중복된 숫자 갯수
function solution(array, n) {
  let answer = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }
  return answer;
}
function solution(array, n) {
  return array.filter((v) => v === n).length;
}

/*
머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다.
정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
*/
function solution(n, k) {
  return 12000 * n + (k * 2000 - parseInt(n / 10) * 2000);
}

// height보다 큰사람 출력
function solution(array, height) {
  return array.filter((h) => h > height).length;
}

// 편지 길이 _ 문자당 2cm
function solution(message) {
  return message.length * 2;
}

// 배열 뒤집기
function solution(num_list) {
  var answer = [];
  for (i = num_list.length - 1; i >= 0; i--) {
    answer.push(num_list[i]);
  }
  return answer;
}
function solution(num_list) {
  var answer = [];
  num_list.forEach((i) => answer.unshift(i));
  return answer;
}
