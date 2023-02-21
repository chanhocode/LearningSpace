// document.cookie="name=???;name2=???;expires=???;path=???"
// expires: 만료 기간 설정
// path:

// 쿠키 읽기
function getCookie() {
  const allCookies = document.cookie; // 하나의 문자열로 리턴
  console.log('allCookies: ', allCookies);

  if (allCookies !== '') {
    alert(
      '저장된 쿠키의 값은: ' + allCookies + '\n(다시 방문하신걸 환영합니다.)'
    );
  } else {
    alert('저장된 쿠키가 없습니다.');
  }
}
function setCookie() {
  // 만료일 생성
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + 10);
  console.log('expiration: ', expiration);

  // UTC방식으로 표기 --> toUTCString() 메서드 사용
  console.log('UTC: ', expiration.toUTCString());

  // 쿠키 생성하기
  let cookies = '';
  cookies = 'username=chanho;expires=' + expiration.toUTCString();
  console.log('cookies 확인: ', cookies);

  // 쿠키 저장하기
  document.cookie = cookies;
  alert('쿠키를 생성하였습니다.');
}

function deleteCookie() {
  // document.cookie에 값을 대입하는 형태로 값을 삭제 한다. _ 수정의 개념
  // 이미 한참 지나간 시간을 입력하여 쿠키를 삭제
  document.cookie = 'username=chanho;expires=Sat, 01 Jan 1972 00:00:00 GMT';
  alert('쿠키를 삭제하였습니다.')
}
