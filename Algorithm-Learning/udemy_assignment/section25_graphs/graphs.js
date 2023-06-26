// Graphs

/**

Graphs: 노드와 각 꼭지점의 연결쌍의 집합 (Nodes + Connections)

# 그래프의 이용
- Social Networks
- Location/Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- ...

# Essential Graph Terms
- Vertex: a node
- Edge: Connection between nodes
- Weighted/Unweighted: values assigned to distances between vertices
- Directed/Undirected: direcions assigned to distanced between vertices

 */

// 인접리스트 활용
class Graphs {
  constructorthis() {
    this.adjacencyList = {};
  }
  /**
   * 점 추가
   * graphs.addVertex("Hello"); -> {"Hello": []}
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  /**
   * 간선 추가
   * graphs.addEdge("Hello", "My"); -> {"Hello": ["My"], "My": ["Hello"]}
   */
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
}
