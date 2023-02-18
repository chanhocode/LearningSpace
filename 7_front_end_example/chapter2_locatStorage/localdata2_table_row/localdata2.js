window.onload = () => {
  // 버튼 가져오기
  const $btnCrc = document.querySelector('.btnCrc');
  // 버튼 클릭시
  $btnCrc.addEventListener('click', () => {
    // 처리
    let $htmlTbody = document.getElementById('htmlTbod');

    // javaScript Table row and column
    // Insert a row at the end of table
    const newRow = $htmlTbody.insertRow(); // row 한 줄 생성
    // Insert a cell a the end of the row
    const newCell0 = newRow.insertCell();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    const newCell3 = newRow.insertCell();
    // Apeend - 텍스트 노드를 새롭게 생성한 cell에 넣기
    const newText0 = document.createTextNode('CH');
    const newText1 = document.createTextNode('Hello@gmail.com');
    const newText2 = document.createTextNode('27');
    const newText3 = document.createTextNode('WM');
    newCell0.appendChild(newText0);
    newCell1.appendChild(newText1);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);

    // 테이블의 row 구하기
    const $myTable = document.getElementById('myTable');
    // console.log($myTable.rows.length - 1); // thead가 포함되어 있으므로 이를 제외 하기 위해서
    // console.log($myTable.rows[0]); // thead
    // console.log($myTable.rows[1]); // tbody - first row

    // Cell 구하기
    const row = $myTable.rows.length - 1;
    const cellL = $myTable.rows[row].cells.length; // 해당 row의 cell 갯수

    // 반복문을 순회하면서 각 cell에 정보 값을 셋팅
    for (let i = 0; i < cellL; i++) {
      $htmlTbody.rows[row - 1].cells[i].innerHTML = `[${row - 1}, ${i}]`;
    }
  });
};
