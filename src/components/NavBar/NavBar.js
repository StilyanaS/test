import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
        <Link to="/">
          <img
            src={"https://freesvg.org/img/Steren_Tennis_ball.png"}
            width="40"
            alt="logo"
          />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/category/babolat" className='menu-elem'> Babolat</Link>
              <Link to="/category/wilson" className='menu-elem'>Wilson</Link>
              <Link to="/category/head" className='menu-elem'>Head</Link>
                <Link to="/about" className='menu-elem'> About</Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/cart" className='menu-elem'><CartWidget /></Link>
      </Container>
    </Navbar>
  );
};

export default NavBar;
