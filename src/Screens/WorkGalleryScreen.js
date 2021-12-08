import React from 'react';


import ColeCarousel from '../Components/ColeCarousel';
import { Row, Col } from 'react-bootstrap';


 
const WorkGalleryScreen = () => {
  return (
    <>
      <h1>Work Gallery</h1>
      <Row>
        <Col sm={12} md={12} lg={6} xl={6}>
      
      <ColeCarousel />
      </Col>
      </Row>
    </>
  );
};

export default WorkGalleryScreen;
