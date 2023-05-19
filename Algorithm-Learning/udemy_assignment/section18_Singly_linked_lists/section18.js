// 단일 연결 리스트

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 구현하고자 하는 원리
// let first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

// 단일 연결 리스트 구현
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // push: 주어진 값을 받아들인후, 새로운 노드 생성
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      // 만일 리스트가 비어 있다면
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 비어있지 않다면 테일이 가리키고 있는 마지막 노드의 next가 새로운 노드를 가리키도록 한다.
      // 리스트의 테일이 대신 새로운 노드를 가리키도록 한다.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // pop: 연결리스트의 맨 마지막에서 노드를 제거한다.
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // shift: 연결 리스트의 앞에서 노드를 제거한다.
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // unshift: 새로운 노드를 리스트 맨 앞에 추가한다.
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get: 인덱스를 받아 주어진 위치에 있는 노드를 반환
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // set: 해당 인덱스의 노드를 업데이트 한다.
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // insert: 주어진 위치에 값을 삽입한다.
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // remove: 인덱스의 노드를 제거하고 이전 이후 노드를 연결한다.
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  // reverse: 역방향 변환
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// test
let list = new SinglyLinkedList();
list.push('Hello');
list.push('goodbye');
list.push('!');
console.log(list);
list.pop();
console.log(list);
list.shift();
console.log(list);
list.unshift('Test');
console.log(list);
