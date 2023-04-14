// 이진 검색 (Binary Search Exercise)  "Worst: O() , Best: O(), Average: O() "
// Divide and Conquer

function binarySearch(arr, target) {
  let mid = Math.floor(arr.length / 2);
  let front = 0;
  let back = arr.length - 1; // -1을 빼지 않으면 배열의 범위를 벗어날 수 있다.
  while (front < back && mid !== arr.length - 1) {
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      front = mid;
    } else if (arr[mid] > target) {
      back = mid;
    }
    mid = Math.floor((front + back) / 2);
  }
  if (arr[mid] === target) return mid;
  return -1;
}

console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1

// re:
function binarySearch2(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1; // middle은 이미 검증이 끝남
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
