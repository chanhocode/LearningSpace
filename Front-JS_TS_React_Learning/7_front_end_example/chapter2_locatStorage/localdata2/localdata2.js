// 값 저장하기 --> localStorage.setItem('key', value);
// 값 가져오기 --> localStorage.getItem('key');
// 값 삭제하기 --> localStorage.removeItem('key');

// key만 출력 _ localStorage.key(index)
// key 갯수 _ localStorage.length

window.onload = () => {
  $btnAllView = document.querySelector('.btnAllView');

  // 버튼 클릭 시 동작
  $btnAllView.addEventListener('click', () => {

    // 배열 정보를 동적으로 테이블 생성하여 삽입하기
    let arr = [];
    let result = '';

    for (let i = 0; i < localStorage.length; i++) {
      const thisKey = localStorage.key(i);
      const thisValue = localStorage.getItem(thisKey);
      result += '<tr>';
      result += '<td class="align-middle" width="30%">' + thisKey + '</td>';
      result += '<td class="align-middle" width="30%">' + thisValue + '</td>';
      result += '<td><button class="btnRemove btn">Remove</button></td>';
      result += '</tr>';
      const $htmlTbod = document.getElementById('htmlTbod');
      $htmlTbod.innerHTML = result;
      arr.push(result);

      // // 쿠키 삭제 동작
      // const $btnRemove = document.querySelector('.btnRemove');
      // $btnRemove.addEventListener('click', () => {
      //   localStorage.removeItem(thisKey);
      // });
    }
    console.table(arr);
    // // append _ jquery
    // $('#htmlTbody').empty(); // 버튼 클릭 전에 데이터가 있다면 비운다.
    // $('#htmlTbody').append(result);
  });
};
