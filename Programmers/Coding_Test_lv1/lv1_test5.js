// 핸드폰 번호 가리기
/*
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부
*으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
*/

// 나의 코드
function solution(phone_number) {
  let toArray = phone_number.split('');
  toArray.map((d, i)=>{
    i<toArray.length-4 ? toArray[i] = '*' : toArray[i] = d
  })
  let answer = toArray.join("")
  return answer;
}

// test
console.log(solution("01033334444"));


// 일반적인 답안
function hide_numbers(s){
  var result = ""
  for(var i=0;i< s.length;i++){    
    result += i < s.length -4 ? "*" : s.charAt(i);
  }  
  return result;
}

// 인상깊은 코드
// 1. 정규식 사용
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 2. repeat 사용
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}



// 학습
/*
  1. split() 문자열 -> 배열
    - string.split(separator, limit);
    - 문자, 문자열을 'separator'라는 구분자를 기준으로 잘라서 'limit' 크기 이하의 배열에 저장하여 리턴.
    - limit는 최대 분할 개수를 나타내며, 필수 값이 아니다.
  2. toString() & join() 배열 -> 문자열
    - toString()메서드는 지정된 배열 및 그 요소를 나타내는 문자열을 반환합니다.
      -> 배열의 각 요소들이 쉼표(,)로 구분되어 반환
    - join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 반환합니다.
      -> 구분자를 설정할 수 있다. (기본값: 쉼표)
  3. charAt & indexOf & substring
    - charAt(인수) : 인수번째의 문자를 읽어 냅니다. ex)"java".charAt(2) -> 'v'
    - indexOf(인수) : 인수번째 들어있는 위치를 알려 줍니다. ex) "java".indexOf(v) -> 2
    - substring(인수, 인수) : 문자열을 일어낸다. ex) "java".substring(0,2) -> 'jav'
  4. replace()
    - replace('old', 'new')는 문자열에 있는 old를 new로 바꾼 문자열을 리턴한다. // 문자열 치환
      - let str - "Hello world, java"
        str = str.replace('java', 'javaScript') -> Hello world, javaScript
      -> 만약 동일 문자열이 여러개 있으면, 가장 먼저 찾은 문자열 한개만 치환 한다.
  5. 정규식을 이용하여 모든 문자열 치환
    - replace(/[old str]/g, '[new str]') 문자열에 모든 old str을 new str으로 변환한다.
*/