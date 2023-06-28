// DFS (Iterative)
/**
 
DFS-iterative(start) :
  let S be a stack
  S.push(start)
  while S is not empty
    vertex = S.pop()
    if vertex is not labeled as discovered:
      visit vertex (add to result list)
      label vertex as discovered
      for each of vertex's neighbord, N do
        S.push(N)

 */

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
  // === DFS ===
  interativeDFS(start) {
    const stack = [start];
    const visited = {};
    const resutl = [];

    visited[start] = true;
    while (stack.length) {
      let currentVertex = stack.pop();
      resutl.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return resutl;
  }
}
