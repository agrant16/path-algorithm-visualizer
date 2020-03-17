import Pathfinder from "./Pathfinder";
export default class DFS extends Pathfinder {
  static weighted = false;

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
  }
}
