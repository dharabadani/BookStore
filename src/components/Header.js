import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => (
  <header data-testid="app-header">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#/">Book Store</Navbar.Brand>
    </Navbar>
  </header>
)
export default Header;