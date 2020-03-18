/*
Implementation of Dijkstra's algorithm in JavaScript.
*/
import Pathfinder from "./Pathfinder";

export default class Dijkstra extends Pathfinder {
  static weighted = true;

  traverse(grid, startNode, endNode) {
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    startNode.weight = 0;
    const unvisited = this.getAllNodes(grid);

    while (unvisited.length !== 0) {
      this.sortNodesByDistance(unvisited);
      const closestNode = unvisited.shift();
      // If the closest node is at a distance of infinity,
      // we must be trapped and should therefore stop.
      if (closestNode.distance === Infinity) return visitedNodesInOrder;
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode === endNode) return visitedNodesInOrder;
      let neighbors = this.getUnvisitedNeighbors(closestNode, grid);
      for (const neighbor of neighbors) {
        let newDistance = closestNode.distance + neighbor.weight;
        if (newDistance < neighbor.distance) {
          neighbor.distance = newDistance;
          neighbor.previous = closestNode;
        }
      }
    }
  }

  sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  }
}
