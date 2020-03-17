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
      grid: new Grid(Dijkstra.weighted),
      mouseIsPressed: false,
      animator: new Animator(),
      visualize: false
    };

    this.visualize = this.visualize.bind(this);
    this.speedChange = this.speedChange.bind(this);
    this.algoChange = this.algoChange.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.newWeights = this.newWeights.bind(this);
  }

  handleMouseDown(row, col) {
    this.state.grid.toggleWall(row, col);
    this.setState({ mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    this.state.grid.toggleWall(row, col);
    this.setState({ mouseIsPressed: true });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  algoChange(text) {
    this.clearBoard();
    let { algo, algoText, grid } = this.state;
    switch (text) {
      case "Dijkstra":
        algo = Dijkstra;
        algoText = "Dijkstra's";
        grid = new Grid(algo.weighted);
        break;
      case "BFS":
        algo = BFS;
        algoText = "Breadth-First Search";
        grid = new Grid(algo.weighted);
        break;
      case "DFS":
        algo = DFS;
        algoText = "Depth-First Search";
        grid = new Grid(algo.weighted);
        break;
      default:
        return;
    }

    this.setState({ algo: algo, algoText: algoText, grid: grid });
  }

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

  visualize() {
    const { grid, algo, visualized } = this.state;
    if (visualized) {
      this.clearBoard();
      this.setState({ visualized: false });
    }
    const traverser = new algo();
    const startNode = grid.grid[START_ROW][START_COL];
    const endNode = grid.grid[END_ROW][END_COL];
    let visitedNodesInOrder = traverser.traverse(grid.grid, startNode, endNode);
    console.log(visitedNodesInOrder.map(node => node.previous));
    let shortestPath = traverser.getShortestPath(startNode, endNode);
    console.log(shortestPath);
    this.state.animator.animate(visitedNodesInOrder, shortestPath);
    this.setState({ visualized: true });
  }

  clearBoard() {
    const { grid } = this.state;
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 50; col++) {
        let node = grid.grid[row][col];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node ";
        node.isWall = false;
        node.isVisited = false;
        node.previous = null;
        node.distance = Infinity;
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
    this.setState({ visualized: false });
  }

  newWeights() {
    this.clearBoard();
    const { algo } = this.state;
    const grid = new Grid(algo.weighted);
    this.setState({ grid: grid });
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
