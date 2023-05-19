# Singly Linked Lists (단일 연결 리스트)

## What is a Linked list?

- 연결 리스트는 다음 데이터 엘리먼트를 가리키는 인덱스 없이 그냥 다수의 데이터 엘리먼트 들로 구성된다.
- 다음 노드들을 가리키고 있는 수 많은 노드들 (하나의 노드는 다음 노드를 다음 노드는 그 다음 노드를 가리킨다.)
- 처음을 가리키는 Head 와 마지막을 가리키는 Tail을 가지고 있따.

## Comparisons with Array

#### Lists
- do not have indexes
- connected via nodes with a next pointer
- random access is not allowed

#### Arrays
- indexed in order
- insertion and deletion can be expensive
- can quickly be accessed at a specific index