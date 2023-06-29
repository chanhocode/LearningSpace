// Dijkstra's Algorithm _다익스트라 최단 경로 알고리즘

/**

 1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
 2. Once we've moved to the node we're going to visit, we look at each of its neighbors
 3. For each neighboring node, we calculate the distace by summing the total edges that lead to the node we're checking from the starting node
 4. If the new total distance to a node is less than previous total, we store the new shorter distance for that node

 */

// 우선순위 큐
class PriortiyQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// 가중치 그래프
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstra(start, finish) {
    const nodes = new PriortiyQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];

    // 초기화
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0; // 시작지점은 0
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity; // 나머지 무한대
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
