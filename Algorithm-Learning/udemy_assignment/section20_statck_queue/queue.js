// Queue _ 선입선출 (FIFO)

// 배열을 Queue로 사용하기
let arrQueue = [];
arrQueue.push('first');
arrQueue.push('second');
arrQueue.push('third'); // ['first', 'second', 'third']
arrQueue.shift(); // 'first' _ 선입선출
// unshift 를 사용해 추가시 pop을 사용

// 스크래치
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
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
