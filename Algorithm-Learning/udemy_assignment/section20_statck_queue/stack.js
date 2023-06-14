// Stacks
/*
  후입선출 (LIFO)
  마지막에 추가된 데이터가 먼저 나간다.
*/

// 배열을 스택으로 사용하기
let ArrStack = [];
ArrStack.push('google');
ArrStack.push('instagram');
ArrStack.push('youtube');
// ['google', 'instagram', 'youtube']
ArrStack.pop(); // youtube _ 가장 마지막에 들어간게 먼저 나온다.
// unshift를 사용하여 데이터를 추가시 shift를 사용하여 배열에서 제거 (후입선출)

// 스크래치 _ 단일 연결 리스트
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
