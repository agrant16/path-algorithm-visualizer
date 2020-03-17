/* Default class for other pathfinding algorithms to inherit from.*/
export default class Pathfinder {
  getShortestPath(endNode) {
    /* Backtrack from the endNode to the
       startNode to get the shortest path */
    console.log(endNode);
    const shortestPath = [];
    let currentNode = endNode;
    while (currentNode !== null) {
      shortestPath.unshift(currentNode);
      currentNode = currentNode.previous;
    }
    return shortestPath;
  }
}
