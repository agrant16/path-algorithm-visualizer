import Pathfinder from "./Pathfinder";

export default class BellmanFord extends Pathfinder {
  static weighted = true;
  static text = `Bellman-Ford's works on weighted graphs and guarantees
  the shortest path. This algorithm works by iterating |V| - 1 times over
  all edges in the graph. For each edge (u,v,w) it "relaxes" the edge
  by checking to see if u.distance + w is less than v.distance.
  If so, then v.distance is updated to hold u.distance + w. After |V| - 1
  interations we will know the shortest path from the start node to the end node.
  For this visualization I consider a node visited the first time an edge
  including the node is looked at. In this manner any node with no edges, i.e
  a single node surrounded by walls, is never visited.`;
  traverse(grid, startNode, endNode) {
    const visitedNodesInOrder = [];
    const nodes = this.getAllNodes(grid);
    startNode.previous = null;
    startNode.distance = 0;
    //visitedNodesInOrder.push(startNode);
    let visited = Array(19 * 49).fill(false);
    for (let i = 0; i < 19 * 49 - 1; i++) {
      for (const node of nodes) {
        const neighbors = this.getUnvisitedNeighbors(node, grid);
        const { row, col } = node;
        if (!visited[row * 49 + col] && neighbors.length > 0) {
          visitedNodesInOrder.push(node);
          visited[row * 49 + col] = !visited[row * 49 + col];
        }
        for (const neighbor of neighbors) {
          let newDistance = node.distance + neighbor.weight;
          if (newDistance < neighbor.distance) {
            //if (!visitedNodesInOrder.includes(neighbor))
            // visitedNodesInOrder.push(neighbor);
            neighbor.distance = newDistance;
            neighbor.previous = node;
          }
        }
      }
    }
    return visitedNodesInOrder;
  }
}
