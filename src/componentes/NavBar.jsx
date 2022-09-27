import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="md" >
      <Container>
        <Navbar.Brand href="#home">Daniel Gomez Diaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " >
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <Nav.Link href="#contactMe">Contact Me </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;