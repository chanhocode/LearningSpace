// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  // basecase
  if (str.length === 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

// let a = 'hello';
// console.log(a.slice(1));
