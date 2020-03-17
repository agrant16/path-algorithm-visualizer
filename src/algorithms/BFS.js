import Pathfinder from "./Pathfinder";
/* Class for Breadth-first-search */
export default class BFS extends Pathfinder {
  static weighted = false;

  traverse(grid, startNode, endNode) {
    const unvisited = [];
    const visitedNodesInOrder = [];
    startNode.isVisted = true;
    startNode.previous = null;
    unvisited.push(startNode);
    visitedNodesInOrder.push(startNode);
    while (unvisited.length !== 0) {
      let currentNode = unvisited.shift();
      if (currentNode === endNode) {
        return visitedNodesInOrder;
      }
      let neighbors = this.getUnvisitedNeighbors(currentNode, grid);
      for (const neighbor of neighbors) {
        neighbor.isVisited = true;
        neighbor.previous = currentNode;
        unvisited.push(neighbor);
        visitedNodesInOrder.push(neighbor);
      }
    }
    return visitedNodesInOrder;
  }
}
