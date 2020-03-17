import React, { Component } from "react";

import "./Node.css";

export default class Node extends Component {
  render() {
    const {
      col,
      row,
      isEnd,
      isStart,
      isVisited,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      weight
    } = this.props;
    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${nodeType(this.props)}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      >
        {weight}
      </div>
    );
  }
}

const nodeType = node => {
  const type = node.isEnd
    ? "node-end"
    : node.isStart
    ? "node-start"
    : node.isWall
    ? "node-wall"
    : " ";
  return type;
};
