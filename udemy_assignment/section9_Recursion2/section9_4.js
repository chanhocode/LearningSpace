// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result.push(arr[i]);
    } else {
      const temp = flatten(arr[i]);
      result = result.concat(temp);
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// result
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
