import React from 'react'
import {Container,Nav, Navbar } from 'react-bootstrap';

function Navbars() {
  return (
    <div class='navbares'>
     <Navbar bg="dark" variant="dark">
        <Container class='meneus '>
          <Navbar.Brand href="#home">Kaled Benouada</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">ABOUT</Nav.Link>
            <Nav.Link href="#features">PORTFOLIO</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    </div>
  )
}

export default Navbars
