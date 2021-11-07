import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home"><img src={"https://freesvg.org/img/Steren_Tennis_ball.png"} width="40" alt="logo"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#babolat">Babolar</Nav.Link>
          <Nav.Link href="#wilson">Wilson</Nav.Link>
          <Nav.Link href="#head">Head</Nav.Link>
        </Nav>
        <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar
