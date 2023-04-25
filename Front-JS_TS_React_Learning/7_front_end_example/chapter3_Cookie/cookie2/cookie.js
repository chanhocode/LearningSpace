// 쿠키 생성하기
const setCookie = function (cname, cvalue, cexpire) {
  event.preventDefault(); // submit, href 발생시 --> 이동 방지 및 새로 실행 방지

  // 값 체크
  if (document.getElementById('cname'.value === '')) {
    return;
  }
  cname = document.getElementById('cname').value;
  cvalue = document.getElementById('cvalue').value;
  cexpire = document.getElementById('cexpire').value;
  console.log('cname: ', cname, ' cvalue: ', cvalue, ' cexpire: ', cexpire);
  // 만료일 생성
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + parseInt(cexpire));
  console.log('expiration: ', expiration);

  // 쿠키 저장하기
  let cookie = '';
  cookie += `${cname}=${cvalue};`;
  cookie += `expires=${expiration.toUTCString()};`;
  document.cookie = cookie;
  alert('쿠키를 생성하였습니다.');
  // document.getElementById('cname').value = '';
  // document.getElementById('cvalue').value = '';
  // document.getElementById('cexpire').value = '';
  document.getElementById('form').reset();
};

// 쿠키 읽기
const getCookie = function () {
  // 저장된 모든 쿠키 읽어오기
  const allCookies = document.cookie;
  console.log(allCookies);
  if (allCookies != '') {
    alert(`현재 저장되어 있는 쿠키는 ${allCookies} 입니다.`);
  } else {
    alert('저장된 쿠키가 없습니다.');
  }
};

// 쿠키 삭제하기
const delCookie = function () {
  const delname = document.getElementById('delname').value;
  document.cookie = `${delname}=; expires=Sat, 01 Jan 1972 00:00:00 GMT`;
  document.getElementById('delname').value = '';
  alert(`${delname}를 지웠습니다.`);
};

// 쿠키 전체 삭제하기
const allDelCookie = function (domain, path) {
  domain = domain || document.domain;
  path = path || '/';

  const allCookies = document.cookie.split('; ');
  console.log(allCookies);
  const expiration = 'Sat, 01 Jan 1972 00:00:00 GMT';

  // 순회하며 쿠키 삭제
  allCookies.map((v) => {
    let cname = v.split('=')[0];
    document.cookie = `${cname}=; expires=${expiration}`;
  });
  alert('쿠키를 전부 지웠습니다.');
};

const $form = document
  .getElementById('form')
  .addEventListener('submit', setCookie);
