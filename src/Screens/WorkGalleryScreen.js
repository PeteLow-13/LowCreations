import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CabinDeckCarousel from '../Components/CabinDeckCarousel';
import ClearCedarFenceCarousel from '../Components/ClearCedarFenceCarousel';
import ColeCarousel from '../Components/ColeCarousel';
import MobileFencing from '../Components/MobileFencing';

const WorkGalleryScreen = () => {
  return (
    <>
      <h1>Work Gallery</h1>
      <h2>Just a small sample of projects we've done</h2>
      <Row>
        <Col sm={12} md={12} lg={6} xl={6}>
          <ClearCedarFenceCarousel />
        </Col>
        <Col sm={12} md={12} lg={6} xl={6}>
          <ColeCarousel />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={6} xl={6}>
          <CabinDeckCarousel />
        </Col>
        <Col sm={12} md={12} lg={6} xl={6}>
          <MobileFencing />
        </Col>
      </Row>
    </>
  );
};

export default WorkGalleryScreen;
