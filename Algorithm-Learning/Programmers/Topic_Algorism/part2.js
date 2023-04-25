// 순열 검사
// 길이가 n인 배열에 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 합니다. 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 solution을 완성해주세요.

// 나의 코드
/*실패 :: 정확성 70.3 _ 효율성 3.7
function solution(arr) {
  var answer = true;
  var count = arr.length
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(i+1)) continue;
    answer = false;
    break
  }
  return answer;
}
*/
//성공 코드 :: 정확성 70.3 _ 효율성 29.7
function solution(arr) {
  var answer = true;
  let sortArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (sortArr[i] === i + 1) continue;
    answer = false;
    break;
  }
  return answer;
}
console.log(solution([4, 1, 3]));
console.log("test");

// 해설 :: 방법 1: 범위를 벗어나는 값이 있는지 확인해보기, 범위를 벗어나지 않는 값이 몇번 등장하는지 체크하기
//        방법 2: 배열을 정리하여 순서대로 순회하며 1부터 n까지의 숫자가 모두 있는지 확인합니다.
/* 자바 코드
 __방법 1
#include<vector>
using namespace std;

int chk[100001] = {0};
bool solution(vector<int> arr)
{
    int n = arr.size();
    for(int i=0; i<n; ++i)
    {
        if(arr[i] < 1 || arr[i] > n)
            return false;
        chk[arr[i]]++;
    }
    for(int i=1; i<=n; ++i)
        if(chk[i] != 1)
            return false;
    return true;
}
__방법 2
#include<vector>
#include<algorithm>
using namespace std;

bool solution(vector<int> arr)
{
    sort(arr.begin(), arr.end());
    for (int i = 0; i < arr.size(); ++i)
    {
        if(arr[i] != i+1)
            return false;
    }
    return true;
}
*/

// 인상 깊은 다른 코드
function solution(arr) {
  return arr.sort((a, b) => a - b).every((a, i) => a === i + 1);
}
/* Array.every() __ 모든 원소가 조건에 맞는지 검사하는 메서드 every함수는 배열의 모든 요소가 callbackFunction 에서 true를 리턴해야 true 리턴.
+) some() 함수는 배열의 요소중 하나라도 callbackFunction 에서 true를 리턴하면 true를 리턴한다.
*/
function solution(arr) {
  var answer = true;

  arr = arr.sort(function (a, b) {
    return a - b;
  });
  while (arr.length !== 0) {
    if (arr.length != arr.pop()) return false;
  }

  return answer;
}
/* 자바스크립트 배열 추가 삭제
배열 추가: Array.push()__배열의 끝에 요소를 추가, Array.unshift()__배열의 앞쪽에 요소를 추가, Array.splice()__원하는 위치에 하나 이상의 요소를 추가(.splice(위치,0,요소1, 요소2 . . .))
배열 삭제: Array.pop()__배열의 마지막 요소를 제거, Array.shift()__배열의 첫번째 요소를 제거, Array.splice()__원하는 위치에서 하나 이상의 요소를 제거(.splice(위치, 제거건수, 요소 . . .(추가 가능))
*/
function solution(arr) {
  var answer = true;
  var maxLength = arr.length;
  var sum = 0;
  var arrSum = 0;
  for (var i = 0; i < maxLength; i++) {
    sum += i + 1;
    arrSum += arr[i];
  }

  if (sum != arrSum) {
    answer = false;
  }
  return answer;
}
