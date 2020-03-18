import React, { Component } from "react";
import Header from "./Header/Header";
import Node from "./Node/Node";
import Animator from "./Animator";
import Dijkstra from "../algorithms/Dijkstra";
import BFS from "../algorithms/BFS";
import DFS from "../algorithms/DFS";
import Grid from "./Grid";
import { START_ROW, START_COL, END_ROW, END_COL } from "../constants";
import "./Visualizer.css";

/*
Visualizer component which controls much of the functionality of the app.
*/
export default class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algo: Dijkstra,
      algoText: "Dijkstra's",
      speed: "fast",
      grid: new Grid(
        Dijkstra.weighted,
        [START_ROW, START_COL],
        [END_ROW, END_COL]
      ),
      mouseIsPressed: false,
      animator: new Animator(),
      visualize: false,
      start: [START_ROW, START_COL],
      prevStart: null,
      end: [END_ROW, END_COL],
      prevEnd: null,
      movingStart: false,
      movingEnd: false
    };

    this.visualize = this.visualize.bind(this);
    this.speedChange = this.speedChange.bind(this);
    this.algoChange = this.algoChange.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.newWeights = this.newWeights.bind(this);
  }

  /* The handleMouseXxxx functions handle the
  modifying of nodes to become walls.*/
  handleMouseDown(row, col) {
    const { grid, start, prevStart, end, movingStart } = this.state;
    if (row === start[0] && col === start[1]) {
      this.setState({ movingStart: true });
    } else if (row === end[0] && col === end[1]) {
      this.setState({ movingEnd: true });
    } else {
      grid.toggleWall(row, col);
    }
    this.setState({ grid: grid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    const {
      grid,
      start,
      end,
      mouseIsPressed,
      movingStart,
      movingEnd,
      prevStart
    } = this.state;
    if (!mouseIsPressed) return;
    if (movingStart) {
      grid.toggleStart(row, col);
      grid.toggleStart(start[0], start[1]);
      this.setState({
        start: [row, col],
        movingStart: true
      });
    } else if (movingEnd) {
      grid.toggleEnd(row, col);
      grid.toggleEnd(end[0], end[1]);
      this.setState({ end: [row, col], movingEnd: true });
    } else {
      grid.toggleWall(row, col);
    }
    this.setState({
      grid: grid
    });
  }

  handleMouseUp() {
    this.setState({
      mouseIsPressed: false,
      movingStart: false,
      movingEnd: false
    });
  }

  /* Handles the selection of algorithms.*/
  algoChange(text) {
    this.clearBoard(false);
    let newAlgo = null;
    let newAlgoText = null;
    let newGrid = null;
    const { grid, start, end } = this.state;
    switch (text) {
      case "Dijkstra":
        newAlgo = Dijkstra;
        newAlgoText = "Dijkstra's";
        newGrid = new Grid(Dijkstra.weighted, start, end);
        break;
      case "BFS":
        newAlgo = BFS;
        newAlgoText = "Breadth-First Search";
        newGrid = new Grid(BFS.weighted, start, end);
        break;
      case "DFS":
        newAlgo = DFS;
        newAlgoText = "Depth-First Search";
        newGrid = new Grid(DFS.weighted, start, end);
        break;
      default:
        return;
    }
    newGrid = this.keepWalls(grid, newGrid);
    this.setState({ algo: newAlgo, algoText: newAlgoText, grid: newGrid });
  }

  /* Handles the speed selection updating.
  This feature is currently not implemented.*/
  speedChange(text) {
    let { visitedSpeed, shortestSpeed } = [0, 0];
    switch (text) {
      case "slow":
        visitedSpeed = 100;
        shortestSpeed = 500;
        break;
      case "average":
        visitedSpeed = 50;
        shortestSpeed = 250;
        break;
      case "fast":
        visitedSpeed = 10;
        shortestSpeed = 50;
        break;
      default:
        return;
    }
    this.state.animator.updateSpeed(visitedSpeed, shortestSpeed);
  }

  /* Runs the process of visualizing the algorithm.*/
  visualize() {
    const { grid, algo, visualized, start, end, animator } = this.state;
    if (visualized) {
      this.clearBoard(false);
      this.setState({ visualized: false });
    }
    const traverser = new algo();
    const startNode = grid.grid[start[0]][start[1]];
    const endNode = grid.grid[end[0]][end[1]];
    let visitedNodesInOrder = traverser.traverse(grid.grid, startNode, endNode);
    let shortestPath = traverser.getShortestPath(startNode, endNode);
    animator.animate(visitedNodesInOrder, shortestPath);
    this.setState({ visualized: true });
  }

  /* Resets the nodes back to default state if removeWalls === true.
  If removeWalls === false, then walls are kept in place.*/
  clearBoard(removeWalls) {
    const { grid, start, end } = this.state;
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 50; col++) {
        let node = grid.grid[row][col];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node ";
        node.isVisited = false;
        node.previous = null;
        node.distance = Infinity;
        if (node.isWall && removeWalls) {
          node.isWall = false;
        } else if (node.isWall) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-wall";
        }
        if (row === START_ROW && col === START_COL) {
          document.getElementById(`node-${START_ROW}-${START_COL}`).className =
            "node node-start";
          node.isStart = true;
        }
        if (row === END_ROW && col === END_COL) {
          document.getElementById(`node-${END_ROW}-${END_COL}`).className =
            "node node-end";
          node.isEnd = true;
        }
      }
    }
    this.setState({ grid: grid, visualized: false });
  }

  /* Creates a new Grid object with new weights.*/
  newWeights() {
    this.clearBoard(false);
    const { grid, algo, start, end } = this.state;
    const newGrid = new Grid(algo.weighted, start, end);
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 50; col++) {
        if (grid.grid[row][col].isWall) {
          newGrid.grid[row][col].isWall = true;
        }
      }
    }
    this.setState({ grid: newGrid });
  }

  /* Function to transfer wall locations from
the previous grid to a new grid.*/
  keepWalls(grid, newGrid) {
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 50; col++) {
        if (grid.grid[row][col].isWall) {
          newGrid.grid[row][col].isWall = true;
        }
      }
    }
    return newGrid;
  }

  render() {
    const { grid, mouseIsPressed } = this.state;
    return (
      <div>
        <Header
          visualize={this.visualize}
          changeAlgo={this.algoChange}
          changeSpeed={this.speedChange}
          clearBoard={this.clearBoard}
          changeWeights={this.newWeights}
        ></Header>

        <h3>The current algorithm is {this.state.algoText}.</h3>
        <div className="board">
          {grid.grid.map((row, rowIndex) => {
            return (
              <div key={rowIndex}>
                {row.map((node, nodeIndex) => {
                  const { row, col, isEnd, isStart, isWall, weight } = node;
                  return (
                    <Node
                      key={nodeIndex}
                      col={col}
                      row={row}
                      isEnd={isEnd}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      weight={weight}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
