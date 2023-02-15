// 값 저장하기 --> localStorage.setItem('key', value);
// 값 가져오기 --> localStorage.getItem('key');
// 값 삭제하기 --> localStorage.removeItem('key');

// key를 그대로 놓고 새로운 값을 저장하면 덮어쓰기 되면서 수정
window.onload = () => {
  // Data Button
  const $btnSetLocalData = document.querySelector('.btnSetLocalData');
  const $btnGetLocalData = document.querySelector('.btnGetLocalData');
  const $btnRemoveLocalData = document.querySelector('.btnRemoveLocalData');

  // Input
  const $input = document.querySelector('input');

  // Set Data Button Click
  $btnSetLocalData.addEventListener('click', () => {
    // (1) 입력한 텍스트 값 가져오기
    const iValue = $input.value;

    // (2) localStorage에 저장하기
    localStorage.setItem('userId', iValue);

    // (3) input창 초기화
    $input.value = '';
  });

  // Get Data Button Click
  $btnGetLocalData.addEventListener('click', () => {
    // (1) localStorage 해당 키의 data 불러오기
    const getData = localStorage.getItem('userId');
    if (!getData) {
      alert('저장된 데이터가 없습니다.');
    } else {
      $input.value = getData;
    }
  });

  // Remove Button Click
  $btnRemoveLocalData.addEventListener('click', () => {
    // 해당 키 로컬 데이터 삭제
    localStorage.removeItem('userId');
    alert('Success');
  });
};
