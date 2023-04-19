// Selection Sort  _ O(n^2)

function selectionSort(arr) {
  for (let i = 0; i < arr.lenght; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.lenght; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
