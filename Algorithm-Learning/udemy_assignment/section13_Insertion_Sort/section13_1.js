// Insertion Sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 순회
    let currentValue = arr[i]; // 타겟
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
