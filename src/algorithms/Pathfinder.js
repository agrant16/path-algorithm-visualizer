export default class Pathfinder {
  getShortestPath(endNode) {
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
