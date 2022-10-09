const fs = require('fs');

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j][0] < temp[0]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
};

try {
  // 'Fitbit_Data.txt' 읽어 와서 2차원 배열로 나누어 정리
  const data = fs.readFileSync('./other/SCH_sort/Fitbit_Data.txt', 'utf8');
  const arr = data.replace(/(\r\n|\n|\r)/gm, ' ').split(' ');
  const chunk = [];
  while (arr.length) {
    chunk.push(arr.splice(0, 4));
  }

  // InsertionSort Action
  const result = insertionSort(chunk);

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
  삽입정렬(Insertion Sort) Algorism
    - 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여,
      자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘
    - 매 순서마다 해당 원소를 삽입할 수 있는 위치를 찾아 해당 위치에 넣는다.
    - Logic
      1. 두 번째 자료부터 시작하여 그 앞(왼쪽)의 자료들과 비교하여 삽입할 위치를 지정
         한 후 자룔를 뒤로 옮기고 지정한 자리에 자료를 삽립하여 정렬
      2. 자료가 삽입될 위치를 찾았다면, 그 위치에 자료를 삽입하기 위해 자료를 한 칸씩 뒤로 이동
 */
