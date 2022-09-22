  /**
   * 퀸을 놓을 수 있는지 상, 하, 좌, 우, 대각선을 체크하는 함수
   * @param {*} board array
   * @param {*} row int
   * @returns
   */
   function isChecked (board, row) {
    for (let i = 1; i < row; i++) {
      if (board[i] === board[row]) return false;
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
    }
    return true;
  };

function queens(n) {
  let first = 0;
  const putQueen = (board, row) => {
    if (row === n) {
      for (i = 1; i < board.length; i++) {
        console.log(`(${i}, ${board[i]})`);
      }
      first++;
      return;
    }
    if (first === 1) {
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        board[row + 1] = i;
        if (isChecked(board, row + 1)) putQueen(board, row + 1);
      }
    }
  };

  const board = new Array(n + 1).fill(0);
  board[1] = 1;
  putQueen(board, 1);

  return 1;
}

// test
queens(8);
if (queens(0) == true) console.log('Success');

console.log('SCH 20201693 조찬호')
