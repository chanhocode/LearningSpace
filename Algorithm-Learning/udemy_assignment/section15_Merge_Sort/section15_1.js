// Merge Sort ( 합병 정렬 _ O(nlogn) )
// 배열을 더 작은 배열로 나눈다. (분할 정복)
// 정렬된 배열을 합치는 것은 정렬되지 않은 배열을 합치는 것보다 쉽다.

// 배열 병합 구현
function merge(arr1, arr2) {
  let result = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }
  // 남은 배열 합치기
  while (p1 < arr1.length) {
    result.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    result.push(arr2[p2]);
    p2++;
  }
  return result;
}

console.log('mergeTest: ', merge([1, 3, 5, 10], [2, 4, 6, 7, 8, 9]));

// 정렬
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  // mid Point _ 2로 나누고 floor
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log('sortTest: ', mergeSort([1, 3, 5, 10, 2, 4, 6, 7, 8, 9]));
