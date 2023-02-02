import React, { useState, useCallback, useContext, memo } from 'react';
import { START_GAME, TableContext } from './MineSearch';

const Form = memo(() => {
  // state
  const [row, setRow] = useState(10); // 세로
  const [cell, setCell] = useState(10); // 가로
  const [mine, setMine] = useState(20); // 지뢰 갯수

  // useContext를 통해 데이터를 가져올 수 있다.
  // TableContext _ MineSearch.jsx에서 정의한 초기 값
  const { dispatch } = useContext(TableContext);

  // handler
  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);
  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);
  const onClickBtn = useCallback(() => {
    // context api
    dispatch({ type: START_GAME, row, cell, mine });
  }, [row, cell, mine]);

  // 입력한 값을 전달하여 게임 생성
  return (
    <div>
      <input
        type='number'
        placeholder='세로'
        value={row}
        onChange={onChangeRow}
      />
      <input
        type='number'
        placeholder='가로'
        value={cell}
        onChange={onChangeCell}
      />
      <input
        type='number'
        placeholder='지뢰'
        value={mine}
        onChange={onChangeMine}
      />
      <button onClick={onClickBtn}>시작</button>
    </div>
  );
});

export default Form;
