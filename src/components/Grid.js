/*
Grid class for storing the graph and the nodes therein.
*/
export default class Grid {
  constructor(weighted, start, end) {
    this.grid = this.initializeGrid(weighted, start, end);
  }

  initializeNode(row, col, weighted, start, end) {
    let weight = "0";
    if (weighted) {
      weight = Math.floor(Math.random() * 5) + 1;
    }
    return {
      col,
      row,
      isEnd: row === end[0] && col === end[1],
      isStart: row === start[0] && col === start[1],
      isVisited: false,
      isWall: false,
      distance: Infinity,
      previous: null,
      weight: weight
    };
  }

  initializeGrid(weighted, start, end) {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const newRow = [];
      for (let col = 0; col < 50; col++) {
        newRow.push(this.initializeNode(row, col, weighted, start, end));
      }
      grid.push(newRow);
    }
    return grid;
  }

  toggleStart(row, col) {
    this.grid[row][col].isStart = !this.grid[row][col].isStart;
    this.grid[row][col].isWall = false;
  }
  toggleEnd(row, col) {
    this.grid[row][col].isEnd = !this.grid[row][col].isEnd;
    this.grid[row][col].isWall = false;
  }
  toggleWall(row, col) {
    this.grid[row][col].isWall = !this.grid[row][col].isWall;
  }
}
