const fs = require('fs');

const selectionSort = (arr) => {
  // '-1'을 하는 이유: 마지막 값은 자동으로 정렬되기 떄문이다.
  for (let i = 0; i < arr.length - 1; i++) {
    let least = i;
    // 최솟값 탐색
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[j][1]) < Number(arr[least][1])) {
        least = j;
      }
    }
    if (i != least) {
      [arr[i], arr[least]] = [arr[least], arr[i]];
    }
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

  // SelecionSort Action
  const result = selectionSort(chunk);

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
  선택정렬(selection sort) Algorism
    - in-place sorting(제자리 정렬) 알고리즘
    - 해당 순서에 원소를 넣을 위치는 이미 정해져 있고, 어떤 원소를 넣을지 선택하는 알고리즘
      1. 첫 번째 순서에는 첫 번째 위치에 가장 최솟값을 넣는다.
      2. 두 번째 순서에는 두 번째 위치에 남은 값 중에서의 최솟값을 넣는다.
      3 ...
    - logic
      1. 주어진 배열 중에서 최솟값을 찾는다.
      2. 그 값을 맨 앞에서 위치한 값과 교체한다.
      3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
      4. 하나의 원소만 남을 때까지의 위의 1~3 과정을 반복한다.
 */
