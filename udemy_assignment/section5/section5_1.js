function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Arr = {};
  const str2Arr = {};
  for (let str of str1) {
    str1Arr[str] = (str1Arr[str] || 0) + 1;
  }
  for (let str of str2) {
    str2Arr[str] = (str2Arr[str] || 0) + 1;
  }
  for (let str of str1) {
    if (str1Arr[str] !== str2Arr[str]) {
      return false;
    }
  }
  console.log(str1Arr);
  console.log(str2Arr);
  return true;
}
