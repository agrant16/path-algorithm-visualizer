export function randomWalls(grid) {
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 50; col++) {
      let decider = Math.random();
      if (decider <= 0.1 || decider >= 0.9) grid.toggleWall(row, col);
    }
  }
}
