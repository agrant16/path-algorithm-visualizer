import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href=".">Pathfinding Visualizer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Algorithms" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Djikstra's</NavDropdown.Item>
                <NavDropdown.Item href="#">DFS</NavDropdown.Item>
                <NavDropdown.Item href="#">BFS</NavDropdown.Item>
                <NavDropdown.Item href="#">Bellman-Ford</NavDropdown.Item>
                <NavDropdown.Item href="#">A*</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" onClick={this.props.clearBoard}>
                Clear Board
              </Nav.Link>
              <Button className="visualize-it" onClick={this.props.visualize}>
                Visualize It!
              </Button>
              <Nav.Link href="#">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
