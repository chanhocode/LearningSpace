// Quick Sort (  best,average: O(n log n), worst: O(n^2)  )
/*
 
- 데이터를 분할하여 0개 또는 1개의 항목이 남을 때 까지 분할하려 개별적으로 정렬되는 방식
- 피벗 포인트 이용

- 선택한 수보다 작은수는 왼쪽 큰 수는 오른쪽으로 옮긴다.
- 선택한 숫자는 올바른 위치가 된다.
- 이 과정을 으론쪽 왼쪽을 반복한다.

 */

function pivot(arr, start = 0, end = arr.length) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start]; // 첫 번재 요소부터 시작
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    // base case
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
