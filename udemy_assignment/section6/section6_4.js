// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// str2 를 순회하면서 str1
function isSubsequence(str1, str2) {
  let point = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[point] === str2[i]) {
      point++;
    }
    if (point === str1.length) {
      return true;
    }
  }
  return false;
}

// test
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// solution 1
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// solution 2
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}