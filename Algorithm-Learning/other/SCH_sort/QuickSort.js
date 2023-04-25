const fs = require('fs');

/**
 * QuickSort Function
 *  - 배열의 길이가 '<= 1'일 리턴
 *  - 첫번째 요소를 pivot으로 지정
 *  - pivot을 제외한 모든 요소를 탐색, 작으면 left 크면 right배열에 저장
 *  - 저장된 각각의 배열에 대해 quickSort를 재귀하여 다시 정렬후, 합쳐서 리턴
 * @param {*} arr 
 * @returns 
 */
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] <= pivot[0]) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);
  return [...leftSorted, pivot, ...rightSorted];
};

try {
  // 'Fitbit_Data.txt' 읽어 와서 2차원 배열로 나누어 정리
  const data = fs.readFileSync('./other/SCH_sort/Fitbit_Data.txt', 'utf8');
  const arr = data.replace(/(\r\n|\n|\r)/gm, ' ').split(' ');
  const chunk = [];
  while (arr.length) {
    chunk.push(arr.splice(0, 4));
  }

  // QuickSort Action
  const result = quickSort(chunk);

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
