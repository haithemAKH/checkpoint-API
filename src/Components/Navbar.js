import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navb = () => {
  return (
    <div> 
        <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">checkpoint API</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/all-users">Users</Nav.Link>
        <Nav.Link href="/admin">Admin</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navb