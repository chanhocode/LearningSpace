// DFS (Recursive)
/** 
DFS(vertex):
  if vertex is empty
    return (this is base case)
  add vertex to results list
  mark vertex as visited
  for exch neighbor in vertex's neighbors:
    if neighbor is not visited:
      recursiverly call DFS on neighbor
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
  recursiveDFS(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList(function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
}
