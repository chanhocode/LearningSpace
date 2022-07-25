// 행렬의 덧셈
/*
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
*/

// 나의 코드
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr1[i].length; j++) {
      result.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(result);
  }
  return answer;
}

//test
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

// 일반적인 답안
function solution(arr1, arr2) {
  var answer = [[]];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

// 인상 깊은 코드
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
