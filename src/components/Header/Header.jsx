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
            <Nav className="mr-auto">
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
                  onClick={() => this.props.changeAlgo("BFS")}
                >
                  BFS
                </NavDropdown.Item>
              </NavDropdown>
              <Button
                className="non-visualize-button"
                onClick={this.props.clearBoard}
              >
                Clear Board
              </Button>
              <Button
                className="non-visualize-button"
                onClick={this.props.changeWeights}
              >
                New Weights
              </Button>
              <Button
                className="visualize-it-button"
                onClick={this.props.visualize}
              >
                Visualize It!
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
