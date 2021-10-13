import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import Vaxed from '../Images/CovidVax.jpeg';
const HomeScreen = () => {
  return (
    <div>
      <h1>Low Creations</h1>
      <h2>Handyman and Repair Services</h2>
      <Row>
        <Col md={12}>
          <Image src={Vaxed} alt='image of covid vaccine stickers' fluid />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
