import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >LC</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            
            <LinkContainer to='/contact' >
            <Nav.Link >Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/work' >
            <Nav.Link >Our Work</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/faq' >
            <Nav.Link >FAQ</Nav.Link>
            </LinkContainer>
            
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
