// x만큼 간격이 있는 n개의 숫자
/*
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
*/

// 나의 코드
function solution(x, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(x + i * x);
  }
  return answer;
}

// test
console.log(solution(2, 5));

// 일반적인 답안
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 인상깊은 답안
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

/*
 - fill() 메소드
    fill() 메소드는 배열의 시작 인덱스부터 이전까지 정적의 값 하나로 채웁니다.
    arr.fill(value[, start[,end]]);
    1) value: 배열을 채울 값
    2) start: 시작 인덱스, 기본 값은 0
    3) end: 끝 인덱스, 기본 값은 this.length
    :: length가 배열의 길이일 때, start가 음수이면 시작 인덱스는 length+start 입니다.
       end가 음수이면, 끝 인덱스는 length+end 입니다.
    fill메소드는 변경자 메소드로 복사본이 아니라 this 객체를 변형해 반환한다.
*/
