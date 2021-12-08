import React from 'react';
import './Footer.css';
import * as FaIcons from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer className='mainfooter' role='contentinfo'>
        {/* <div class="footer-middle"> */}
        <div className='container'>
          <Row>
            <Col className='col-md-3 col-sm-6'>
              {/* <!--Column1--> */}
              <a href='/faq'>FAQ</a>
            </Col>

            <Col className='col-md-3 col-sm-6'>
              {/* <!--Column1--> */}
              <a href='/about'>about us</a>
            </Col>
            <Col className='col-md-3 col-sm-6'>
              {/* <!--Column1--> */}
              <a href='/contact'>contact</a>
            </Col>
            <Col className='col-md-3 col-sm-6'>
              {/* <!--Column1--> */}

              <h4>follow us</h4>
              <ul className='social-network social-circle'>
                <li>
                  <a href='#' className='icoFacebook' title='Facebook'>
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#' className='icoLinkedin' title='Linkedin'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
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
