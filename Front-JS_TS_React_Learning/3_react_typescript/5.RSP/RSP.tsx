import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

// as const 이용시 readonly가 되며 값이 고정된다.
const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
} as const;

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
} as const;

// type imgCoords = keyof typeof rspCoords; // 타입 추론: 가위 | 바위 | 보
// type imgCoords = '0' | '-142px' | '-284px';
type imgCoords = typeof rspCoords[keyof typeof rspCoords];
type ImgCoord = keyof typeof rspCoords;

const computerChoice = (imgCoords: imgCoords) => {
  return (Object.keys(rspCoords) as ['바위', '가위', '보']).find((k) => {
    return rspCoords[k] === imgCoords;
  })!; // ! 를 붙혀 'undefined' 제거
};

const RSP = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState<imgCoords>(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef<number>();
  const clicked = useRef(false);

  useEffect(() => {
    // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    console.log('다시 실행');
    interval.current = window.setInterval(changeHand, 100);
    return () => {
      // componentWillUnmount 역할
      console.log('종료');
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice: ImgCoord) => () => {
    if (!clicked.current) {
      clearInterval(interval.current);
      clicked.current = true;
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult('비겼습니다!');
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = window.setInterval(changeHand, 100);
        clicked.current = false;
      }, 1000);
    }
  };

  return (
    <>
      <div
        id='computer'
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      />
      <div>
        <button id='rock' className='btn' onClick={onClickBtn('바위')}>
          바위
        </button>
        <button id='scissor' className='btn' onClick={onClickBtn('가위')}>
          가위
        </button>
        <button id='paper' className='btn' onClick={onClickBtn('보')}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RSP;
