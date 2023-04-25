function countUniqueValues(arr) {
  let pointL = 0;
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

// 풀이
function countUniqueValues(arr) {
  let point = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[point] !== arr[i]) {
      point++;
      arr[pointL] = arr[i];
    }
  }

  return point + 1;
}
