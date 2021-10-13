import React from 'react';
import { Route } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <Nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div class='container-fluid'>
        <a className='navbar-brand' href='#'>
          Low Creations
        </a>
        {/* <Button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        ></Button> */}
        <span className='navbar-toggler-icon'></span>
        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                Home
                <span className='visually-hidden'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Pricing
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
