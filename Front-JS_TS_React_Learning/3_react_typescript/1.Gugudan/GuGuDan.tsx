import * as React from 'react';
import { useState, useRef } from 'react';

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if (parseInt(value) === first * second) {
      setResult('정답');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      input!.focus(); // 인풋의 존재에 확신이 있을때만 ! 사용
    } else {
      setResult('오답');
      setValue('');
      if (input) {
        input.focus();
      }
    }
  };
  return (
    <>
      <div>
        {first} X {second} = ??
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type='number'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>click</button>
      </form>
      <div id='result'>{result}</div>
    </>
  );
};

export default GuGuDan;
