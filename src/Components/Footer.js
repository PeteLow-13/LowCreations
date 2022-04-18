import React from 'react';
import './Footer.css';

import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer className='mainfooter' role='contentinfo'>
        <div className='container'>
          <Row>
            <Col className='col-md-12 copy'>
              <p className='text-center'>
                &copy; Copyright 2021 - Low Creations. All rights reserved.
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
