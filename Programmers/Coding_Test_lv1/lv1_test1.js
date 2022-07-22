// 문제 설명
/*
신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.
- 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
  -신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
  -한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
- k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
  -유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
제한사항
2 ≤ id_list의 길이 ≤ 1,000
1 ≤ id_list의 원소 길이 ≤ 10
id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
id_list에는 같은 아이디가 중복해서 들어있지 않습니다.
1 ≤ report의 길이 ≤ 200,000
3 ≤ report의 원소 길이 ≤ 21
report의 원소는 "이용자id 신고한id"형태의 문자열입니다.
예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
id는 알파벳 소문자로만 이루어져 있습니다.
이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
자기 자신을 신고하는 경우는 없습니다.
1 ≤ k ≤ 200, k는 자연수입니다.
return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.
*/


// 나의 코드
function solution(id_list, report, k) {
  var answer = [];

  // 객체 형변환
  let userCheck = new Object();
  for (let i = 0; i < id_list.length; i++) {
    let key = id_list[i];
    userCheck[key] = [];
  }
  let mailCheck = new Object();
  for (let i = 0; i < id_list.length; i++) {
    let key = id_list[i];
    mailCheck[key] = 0;
  }
  // 신고, 중복 체크
  report.map((data) => {
    checkData = data.split(" ");
    if (
      checkData[0] !== checkData[1] &&
      userCheck[checkData[1]].includes(checkData[0]) === false
    ) {
      userCheck[checkData[1]].push(checkData[0]);
    }
  });
  // 추출
  for (let i = 0; i < id_list.length; i++) {
    if (userCheck[id_list[i]].length >= k) {
      for (let j = 0; j < userCheck[id_list[i]].length; j++) {
        mailCheck[userCheck[id_list[i]][j]] += 1;
      }
    }
  }
  for (let k = 0; k < id_list.length; k++) {
    console.log(mailCheck[id_list[k]]);
    answer.push(mailCheck[id_list[k]]);
  }
  // console.log(mailCheck);
  return answer;
}

//test
const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];

console.log(solution(id_list, report, 2));
// result [2,1,10]


/*
필요 지식:

1. Set : set객체는 중복되지 않는 유일한 값들의 집합입니다. (set은 수학적 집합을 표현한 자료 구조 입니다.)
  - set 객체의 특성
    1) 동일한 값을 중복하여 포함할 수 없다.
    2) 요소 순서에 의미가 없다.
    3) 인덱스로 요소 접근이 불가능하다.
  - set 객체 생성
    const set = new Set();
    console.log(set); // Set(0) {}
    // set 생성자 함수는 인수로 인터러블을 받습니다. 중복된 값을 Set객체에 요소로 저장되지 않으므로 배열에서 중복된 요소를 제거하는데 사용
    const set1 = new Set([1,2,3,3]);
    console.log(set1); // Set(3) {1,2,3}
*/

// 인상 깊은 코드
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  console.log('reports: ', reports)

  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  console.log(counts)

  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  console.log(good)

  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

// const id_list = ["muzi", "frodo", "apeach", "neo"];
// const report = [
//   "muzi frodo",
//   "apeach frodo",
//   "frodo neo",
//   "muzi neo",
//   "apeach muzi",
// ];

// console.log(solution(id_list, report, 2));
