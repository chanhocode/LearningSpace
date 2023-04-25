function countUniqueValues(arr) {
  let pointL = 0;
  // let pointR = 1
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[pointL] < arr[i]) {
      pointL++;
      arr[pointL] = arr[i];
    }
  }

  return pointL + 1;
}

console.log(countUniqueValues([1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 5]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
