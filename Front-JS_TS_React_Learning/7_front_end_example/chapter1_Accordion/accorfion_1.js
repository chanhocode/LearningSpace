// '윈도우의 모든게 로드가 되어지면 코드를 실행한다' 명시
// script를 body 마지막이 아닌 상단에 둘 수 있다.
window.onload = () => {
  const $panelFaqContainer = document.querySelectorAll('.panel-faq-container');
  // console.log($panelFaqContainer);
  // NodeList(5)
  // 0: div.panel-faq-container
  // 1: div.panel-faq-container
  // 2: div.panel-faq-container
  // 3: div.panel-faq-container
  // 4: div.panel-faq-container
  // length: 5
  // 본문 명시
  let $panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');

  // btn-all-close
  const $btnAllClose = document.getElementById('btn-all-close');

  // 반목문 순휘하면서 해당 FAQ 제목 클릭시 콜배 처리
  for (let i = 0; i < $panelFaqContainer.length; i++) {
    $panelFaqContainer[i].addEventListener('click', function () {
      // active 클래스 추가
      // $panelFaqAnswer[i].classList.add('active');

      // active 클래스 추가 및 제목 재 클릭시 제거
      console.log($panelFaqAnswer[i].classList.value.indexOf('active'));
      if ($panelFaqAnswer[i].classList.value.indexOf('active') > 0) {
        $panelFaqAnswer[i].classList.remove('active');
      } else if ($panelFaqAnswer[i].classList.value.indexOf('active') === -1) {
        $panelFaqAnswer[i].classList.add('active');
      }
    });
  }

  $btnAllClose.addEventListener('click', function () {
    console.log('all close');
    // 전부 닫기 정의
    for (let i = 0; i < $panelFaqAnswer.length; i++) {
      $panelFaqAnswer[i].classList.remove('active');
    }
  });
};
