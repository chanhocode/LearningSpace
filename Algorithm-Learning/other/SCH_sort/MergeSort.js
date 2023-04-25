const fs = require('fs');

const merge = (left, right) => {
  // Conquer
  let arr = [];
  while (left.length && right.length) {
    if (Number(left[0][2]) < Number(right[0][2])) arr.push(right.shift());
    else arr.push(left.shift());
  }
  // Combine
  return [...arr, ...left, ...right];
};
const mergeSort = (arr) => {
  // baseCase
  if (arr.length < 2) return arr;
  // Divide
  const halfNum = arr.length / 2;
  const leftArr = arr.splice(0, halfNum);
  // Conquer & Combine
  return merge(mergeSort(leftArr), mergeSort(arr));
};

try {
  // 'Fitbit_Data.txt' 읽어 와서 2차원 배열로 나누어 정리
  const data = fs.readFileSync('./other/SCH_sort/Fitbit_Data.txt', 'utf8');
  const arr = data.replace(/(\r\n|\n|\r)/gm, ' ').split(' ');
  const chunk = [];
  while (arr.length) {
    chunk.push(arr.splice(0, 4));
  }

  // MergeSort Action
  const result = mergeSort(chunk);

  // 출력
  for (let i = 0; i < result.length; i++) {
    console.log(
      `[${i + 1}] Date:${result[i][0]} Duration:${result[i][1]} Efficienty:${
        result[i][2]
      } Level:${result[i][3]}`
    );
  }
} catch (err) {
  console.error(err);
}

/*
  병합정렬(Merge Sort) Algorism
    - 안정정렬에 속하며, 분할 정복 알고리즘의 하나.
    - Logic
      1. 리스트의 길이가 0또는 1이면 정렬된 것으로 본다.
      2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
      3. 각 부분 리스트를 재귀적으로 병합 정렬을 이용해 정렬한다.
      4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
        @ 분할(Divide): 입력 배열을 같은 크기의 2개의 부분 배열로 분할한다.
        @ 정복(Conquer): 부분 배열을 정렬한다. 부분 배열의 크기가 충분히 작지 않으면
                        순환호출을 이용하여 다시 분할 정복 방법을 적용한다.
        @ 결합(Combine): 정렬된 부분 배열들을 하나의 배열에 합병한다.
 */
