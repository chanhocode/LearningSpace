const fs = require('fs');

const bubbleSort = (arr) => {
  let check = arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < check - 1; j++) {
      if (Number(arr[j][2]) > Number(arr[j + 1][2])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    check--;
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

  // BubbleSort Action
  const result = bubbleSort(chunk);

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
  버블정렬(Bubble Sort) Algorism
    - 서로 인접한 두 원소를 검사하여 정렬 // 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환
    - Logic
      1. 첫 번째 자료와 두 번째 자료를, 두 번째 자료와 세 번째 자료를, 세 번째와 네 번째... 이러한 방식으로 마지막 번째 자료와
         마지막 자료를 비교하여 교환하면서 정렬
      2. 1회전을 수행하면 가장 큰 자료가 맨 뒤로 이동
 */
