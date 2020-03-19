import Pathfinder from "./Pathfinder";

export default class BellmanFord extends Pathfinder {
  static weighted = true;
  static text = `Bellman-Ford's works on weighted graphs and guarantees
  the shortest path. This algorithm works by iterating |V| - 1 times over
  all edges in the graph. For each edge (u,v,w) it "relaxes" the edge
  by checking to see if u.distance + w is less than v.distance.
  If so, then v.distance is updated to hold u.distance + w.
  For this visualization I consider a node visited the first time
  one of its edges is relaxed.`;
  traverse(grid, startNode, endNode) {
    const visitedNodesInOrder = [];
    const nodes = this.getAllNodes(grid);
    startNode.previous = null;
    startNode.distance = 0;
    visitedNodesInOrder.push(startNode);
    for (let i = 0; i < nodes.length - 1; i++) {
      for (const node of nodes) {
        const neighbors = this.getUnvisitedNeighbors(node, grid);
        for (const neighbor of neighbors) {
          let newDistance = node.distance + neighbor.weight;
          if (newDistance < neighbor.distance) {
            neighbor.distance = newDistance;
            neighbor.previous = node;
            if (!visitedNodesInOrder.includes(neighbor))
              visitedNodesInOrder.push(neighbor);
          }
        }
      }
    }
    return visitedNodesInOrder;
  }
}
