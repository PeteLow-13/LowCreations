import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>LC</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            {/* <Nav.Link href='/about'>About Us</Nav.Link> */}
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <Nav.Link href='/work'>Our Work</Nav.Link>
            <Nav.Link href='/faq'>FAQ</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
