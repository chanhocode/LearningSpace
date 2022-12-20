# Learning Front :: 웹 게임으로 배우는

<p align="justify">
1. Vanilla Javascript로 만드는 웹 게임
</p>

## 1. Vanilla Javascript로 만드는 웹 게임

<div align=center>
<h1>📚 STACKS</h1>
<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
</div>

## Preview & action

### main \_ 메인 페이지

<img src="./readmeImg/js_main.png">
<br>

### App1 \_ 끝말잇기 게임 & 쿵쿵따 게임

<img src="./readmeImg/js_app1.png">
<br>

- 참여자 수를 결정한다.
- 첫번째 사람이 제시어를 말하면
- 다음 사람이 제시어 마지막 글자로 시작하는 글자를 말한다.
- 글자의 유효성을 체크 (이전 제시어의 마지막과 새로운 제시어의 첫번째 글자가 동일 한지,)
- (틀릴때 까지 반복)
- 오답일시 틀렸습니다. 출력
  +) 번외 \_ 쿵쿵따 게임 (글자수가 3글자이여야 한다.)

### App2 \_ 계산기

<img src="./readmeImg/js_app2.png">
<br>

- 시작
- 숫자를 입력한다.
- 연산자를 입력한다.
- 숫자를 입력한다.
- '=' 버튼을 클릭한다.
- 계산한다.
- CheckProject: 연달아 계산하기 추가 ex) 1 + 2 + 3 = 6

### App3 \_ 숫자야구

<img src="./readmeImg/js_app3.png">
<br>

1. 게임 방법

- 상대편이 숫자 1~9중에서 중복되지 않게 네개를 고른다.
- 10번의 기회동안 상대편이 고른 숫자 네 개를 맞히는 게임
  단, 숫자의 순서까지 맞혀야 한다.
- 틀릴 때마다 힌트를 준다.
- 맞힌 숫자의 개수, 순서 까지 맞힌 개수(스트라이크)를 알려준다.

ex) result: 3 1 4 6 -> 1 2 3 4 (3볼: 1,3,4 숫자는 맞았지만 자리는 틀림)
-> 3 5 6 7 (1스트라이크 1볼: 한개 숫자 자리를 맞고, 숫자는 맞았는데 자리가 틀림)
-> 2 5 8 9 (아웃) -> 3 1 4 6 (홈런)

### App4 \_ 로또 추첨기

<img src="./readmeImg/js_app4.png">
<br>

1. 순서

- 1~45까지의 숫자를 준비
- 숫자를 섞는다.
- 공 7개를 뽑는다. (마지막 공은 보너스 공)
- 1초마다 공을 하나씩 화면에 표시

### App5 \_ 가위바위보 (컴퓨터와 가위바위보)

<img src="./readmeImg/js_app5.png">
<br>

1. 동작

- 컴퓨터와 가위바위보를 하여 승리 점수를 기록한다.
- 컴퓨터는 가위,바위,보 를 빠르게(0.05sec) 순회 하며 돌아간다.
- 사용자가 버튼을 클릭하면 타이머가 1초동안 일시정지 한다.
- 사용자가 누른 버튼과 일시정지한 컴퓨터의 상태를 비교한다.
- 사용자 승리시 1점, 무승부 0점 비기면 -1점을 부여한다.
- (반복)

2. self-check

- 5판 3선승제 구현
- 무승부가 난 경우 무효
  +) 게임 종료시 가위바위보 화면 정지

### App6 \_ 클릭 반응속도 체크

<img src="./readmeImg/js_app6.png">
<br>

1. 동작

- 처음화면 파랑 :: 대기화면
- 화면을 클릭하면 빨강화면 전환 :: 준비화면
- 임의의 시간이 지난 후 초록화면으로 자동 전환
- 초록화면으로 바뀐 뒤 클릭한 시간을 측정 하여 반환 (초록화면이 뜬 시간과 클릭한 시간의 차)
- 만약 빨강화면에서 클릭 시 성급했다는 메시지 나오고 대기화면으로 전환

2. self-check

- 가장 빠른 다섯 번의 시도가 몇초 인지를 보여라 ( 6번 이상의 시도한 경우 상위 5개만 보여준다.)
</div>
