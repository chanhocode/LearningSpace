// 선형 검색 "Worst: O(n) , Best: O(1), Average: O(n) "
// 처음 부터 순차적으로 탐색하며 원하는 값을 찾는다.

function linearSearch(arr, target) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result = i;
      break;
    }
  }
  return result;
}

// re
function linearSearch2(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
