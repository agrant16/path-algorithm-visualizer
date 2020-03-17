import { START_ROW, START_COL, END_ROW, END_COL } from "../constants";

/*
Grid class for storing the graph and the nodes therein.
*/
export default class Grid {
  constructor(weighted) {
    this.grid = this.initializeGrid(weighted);
  }

  initializeNode(row, col, weighted) {
    let weight = null;
    if (weighted) {
      weight = Math.floor(Math.random() * 5) + 1;
    }
    return {
      col,
      row,
      isEnd: row === END_ROW && col === END_COL,
      isStart: row === START_ROW && col === START_COL,
      isVisited: false,
      isWall: false,
      distance: Infinity,
      previous: null,
      weight: weight
    };
  }

  initializeGrid(weighted) {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const newRow = [];
      for (let col = 0; col < 50; col++) {
        newRow.push(this.initializeNode(row, col, weighted));
      }
      grid.push(newRow);
    }
    return grid;
  }

  toggleWall(row, col) {
    this.grid[row][col].isWall = !this.grid[row][col].isWall;
    this.grid[row][col].isVisited = !this.grid[row][col].isVisited;
  }
}
