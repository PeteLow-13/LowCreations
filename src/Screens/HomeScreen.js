import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import HomepageCarousel from '../Components/HomepageCarousel';

const HomeScreen = () => {
  return (
    <div>
      <h1>Low Creations</h1>
      <h2>Handyman and Repair Services</h2>
      <Row>
        <Col md={12}>
          <HomepageCarousel />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
