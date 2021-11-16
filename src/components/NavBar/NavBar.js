import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={"https://freesvg.org/img/Steren_Tennis_ball.png"}
            width="40"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#babolat">Babolar</Nav.Link>
              <Nav.Link href="#wilson">Wilson</Nav.Link>
              <Nav.Link href="#head">Head</Nav.Link>
              <Nav.Link>
                <Link to="/about"> About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
