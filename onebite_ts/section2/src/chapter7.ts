// void -> 공허 , 아무것도 없음을 의미 하는 타입
function voidTest(): void {
  console.log('voidTest');
}

function voidTest2(): void {
  console.log('voidTest2');
  return undefined;
}

// never -> 절대 발생하지 않는 값
function func3(): never {
  while (true) {}
}
function func4(): never {
  throw new Error();
}
