// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
//  In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// function maxSubarraySum(arr, ms) {
//   if (arr.length < ms) {
//     return null;
//   }
//   // Queue ms만큼 더하고 큐가 다 채워진다면 그 덧셈을 max와 비교하고 더 크다면 저장 _ 첫번째 값을 뺀다.
//   let queue = 0;
//   let start = 0;
//   let point = 0;
//   let first = arr[start];
//   let max = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     console.log('queue: ', queue, ' max: ', max, ' point: ', point);
//     if (point === ms) {
//       if (max < queue) {
//         max = queue;
//       }
//       queue -= first;
//       start++;
//       first = arr[start];
//       point--;
//       i--;
//     } else {
//       queue += arr[i];
//       point++;
//     }
//   }
//   if (max < queue) {
//     max = queue;
//   }
//   return max;
// }

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  console.log('(1) total: ', total);
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    console.log('--------', i);
    console.log('(2) loop current: ', currentTotal);
    console.log('(3) arr[i] - arr[i - num]: ', arr[i] - arr[i - num]);

    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
    console.log('currentTotal: ', currentTotal);
    console.log('total: ', total);
    console.log(
      'total = Math.max(total, currentTotal): ',
      (total = Math.max(total, currentTotal))
    );
  }
  return total;
}
// test                          300  500  700
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

// solution
// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i = 0; i < num; i++) {
//     total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//     currentTotal += arr[i] - arr[i - num];
//     total = Math.max(total, currentTotal);
//   }
//   return total;
// }
