import Pathfinder from "./Pathfinder";
export default class DFS extends Pathfinder {
  static weighted = false;
  static text = `Depth-first search works on unweighted graphs and does not
  guarantee the shortest path. This algorithm visits one node at a time,
  moving along the graph edges until it comes to a node with no unvisited
  neighbors. It then backtracks to a node which has unvisited neighbors and
  moves forward down that path. It repeats this until all nodes that can
  be visited have been, or until it reaches the destination node.`;
  traverse(grid, startNode, endNode) {
    const unvisited = [];
    const visitedNodesInOrder = [];
    startNode.isVisted = true;
    startNode.previous = null;
    unvisited.push(startNode);
    visitedNodesInOrder.push(startNode);
    while (unvisited.length !== 0) {
      let currentNode = unvisited.pop();
      if (currentNode === endNode) {
        return visitedNodesInOrder;
      }
      visitedNodesInOrder.push(currentNode);
      let neighbors = this.getUnvisitedNeighbors(currentNode, grid);
      for (const neighbor of neighbors) {
        neighbor.isVisited = true;
        neighbor.previous = currentNode;
        unvisited.push(neighbor);
      }
    }
    return visitedNodesInOrder;
  }
}
