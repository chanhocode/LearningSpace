// date 0719~0720

// 가장 큰 정 사각형 찾기
/*
1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다.
표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요.
(단, 정사각형이란 축에 평행한 정사각형을 말합니다.)
*/

// 나의 코드
// 접근법 : 2*2가 만들어진다. -> 대각선 확인 -> 대각석 기준 x축 y축 체크
/*
function solution(board) {
  var answer = 1;

  var x = board[0].length;
  var y = board.length;

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      let ist = i + 1;
      let jst = j + 1;
      if (
        board[j][i] === 1 &&
        board[j][ist] === 1 &&
        board[j][ist] === 1 &&
        board[jst][ist] === 1
      ) {
        while (true) {
          let ck = 0;
          if (board[jst + 1][ist + 1] === 1) {
            let ct = 1;
            for (k = 1; k < ist; k++) {
              if (board[jst - ct][ist + 1] === 1 && board[jst + 1][ist - ct]) {
                ck += 1;
                ct += 1;
              } else {
                break;
              }
            }
            if (ck === jst) {
              if (answer < jst * jst) {
                answer = jst * jst;
              }
            }
          }
          ist += 1;
          jst += 1;
          if (border[ist][jst] !== 1) {
            break;
          }
        }
      }
    }
  }
  return answer;
}
*/
// -> 접근법 변경 "다이나믹 프로그래밍"
// 다이나믹 프로그래밍 이란? -> 점화식, 큰 문제를 작은 문제로 나누어 푸는 방법, 메모이제이션 // 재귀적으로 생각하기 + 중복 제거하기

function solution(board) {
  let answer = 0;
  let row = board.length;
  let col = board[0].length;

  if(row < 2 || col < 2) return 1;

  for(let i=1; i<row; i++) {
    for(let j=1; j<col; j++) {
      if(board[i][j] !== 0) {
        let min = Math.min(
          board[i-1][j-1],
          board[i-1][j],
          board[i][j-1]
        );
        board[i][j]=min+1;
      }
      if(answer < board[i][j]) answer = board[i][j];
    }
  }
  return answer * answer
}
console.log(
  "test :" +
    solution([
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ])
);

// 해설
// 다이나믹 프로그래밍 이용
// a지점을 오른쪽 아래 꼭지점으로 하는 정사각형 중 가장 큰 정사각형의 크기는 얼마일까요?
// a가 0이라면 가장 큰 정사각형의 크기는 0입니다.
// a가 1이라면,
/* (a: 좌측하단 1:우측 하단 2: 좌측 상단 3: 우측 상단) 1,2,3 을 오른쪽 아래로 하는 최대 정사각형의 크기를 알고 있다고 가정 했을때
이때 a를 오른쪽 아래로 하는 정사각형중 가장 큰 정사각형은 1,2,3 의 경계선 중에서 가장 가까운 값을 선택하면 된다.
수식으로 정리: dp[i][j] = min(dp[i-1][j], dp[i][j-1],dp[i-1][j-1])+1
*/
/*
#include<vector>
using namespace std;


int dp[1001][1001] = {0};

int solution(vector<vector<int>> board)
{
    int ans = 0;
    int row = board.size();
    int col = board[0].size();
    for (int i = 1; i <= row; ++i)
    {
        for (int j = 1; j <= col; ++j)
        {
            if(board[i-1][j-1] != 0 )
            {
                dp[i][j] = min(dp[i][j-1], min(dp[i-1][j], dp[i-1][j-1])) + 1;
                ans = max(ans, dp[i][j]);
            }
        }
    }
    return ans*ans;
}
*/

// 인상 깊은 코드

function solution(board)
{
    let max = 0
    for(let i = 1; i < board.length; i++) {
        const row = board[i]
        for(let j = 1; j < row.length; j++) {
            row[j] = row[j] ? Math.min(board[i-1][j-1], board[i][j-1], board[i-1][j]) + 1 : 0
        }
    }
    return Math.max(...board.map(row => Math.max(...row))) ** 2
}