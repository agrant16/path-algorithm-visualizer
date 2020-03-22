import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

/*
Controls menu for the pathfinding visualizer app.
*/
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href=".">Pathfinding Algorithm Visualizer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" disabled={this.props.visualized}>
              <NavDropdown
                title="Algorithms"
                id="basic-nav-dropdown"
                className="my-dropdown"
              >
                <NavDropdown.Item
                  href="#"
                  className="my-dropdown-item"
                  onClick={() => this.props.changeAlgo("Dijkstra")}
                >
                  Djikstra's
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  className="my-dropdown-item"
                  onClick={() => this.props.changeAlgo("Bellman-Ford")}
                >
                  Bellman-Ford
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  className="my-dropdown-item"
                  onClick={() => this.props.changeAlgo("BFS")}
                >
                  BFS
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  className="my-dropdown-item"
                  onClick={() => this.props.changeAlgo("DFS")}
                >
                  DFS
                </NavDropdown.Item>
              </NavDropdown>
              <Button
                className="non-visualize-button"
                onClick={this.props.changeWeights}
                disabled={this.props.visualized}
              >
                New Weights
              </Button>
              <Button
                className="visualize-it-button"
                onClick={this.props.visualize}
                disabled={this.props.visualized}
              >
                Visualize It!
              </Button>
              <Button
                className="non-visualize-button"
                onClick={this.props.clearBoard}
                disabled={this.props.visualized}
              >
                Clear Board
              </Button>
              <NavDropdown
                title="Maze Algorithms"
                id="basic-nav-dropdown"
                className="my-dropdown"
              >
                <NavDropdown.Item
                  href="#"
                  className="my-dropdown-item"
                  onClick={() => {
                    this.props.generateMaze("Random");
                  }}
                >
                  Random Walls
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  className="my-dropdown-item"
                  onClick={() => {
                    this.props.generateMaze("RecursiveDivision");
                  }}
                >
                  Recursive Division
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
