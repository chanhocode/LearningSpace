// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...args) {
  if (args.length === 0) {
    return false;
  }
  const temp = {};
  for (let i = 0; i < args.length; i++) {
    if (temp[args[i]]) {
      return true;
    } else {
      temp[args[i]] = 1;
    }
  }
  return false;
}

// test
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// solution
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// solution2
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
  // Set 객체는 중복 없는 데이터를 표현한다.
}