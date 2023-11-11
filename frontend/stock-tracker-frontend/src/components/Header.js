// Header.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    width: '100%', // Added to make the header span the entire width
    textAlign: 'center', // Added to center-align the content
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={headerStyle}>
          <img
            alt="Stock Logo"
            src="https://plus.unsplash.com/premium_photo-1683751113164-ba68afd98f6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual path to your stock logo
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Stock Platform'}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
