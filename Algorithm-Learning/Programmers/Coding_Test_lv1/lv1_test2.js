// 문제 설명
/*
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
*/

// 나의 코드
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
});

// 일반적인 답안
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (var i = 0; i < b; i++) {
    var temp = "";
    for (var j = 0; j < a; j++) temp += "*";
    console.log(temp);
  }
});

// 인상깊은 코드
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

// 학습
/*
1. console 출력 (node js 횐경)
  - 일반적으로 콘솔 출력을 위해서는 'console.log()'를 사용한다.
    - console.log()를 사용시 자동개행(/n) 된다.
  - 콘솔창에 개행 없이 출력이 필요한 경우 'process.stdout.write()' 를 이용하면 된다.
    - 개행이 필요한 경우 '/n' 사용
2. repeat() 함수
  - 자바스크립트의 repeat() 함수는 주어진 문자열을 옵션은 count 만큼 반복하여 붙인 다음에 새로운 문자열로 반환하는 함수이다.
    문자열을 반복한 값을 반환하는 함수인 repeat() 함수로써 반목문을 사용하여 반환도 가능하다. (반복횟수는 양의 정수여야 한다.)
  - 사용법: string.repeat( --반복 count--);
*/
