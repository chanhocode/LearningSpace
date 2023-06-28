// BFS

class Graphs {
  constructorthis() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].map((v) => {
      const ajv = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, ajv);
    });
    delete this.adjacencyList[vertex];
  }
  // === BFS ===
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
