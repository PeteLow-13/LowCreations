import React from 'react';
import { Carousel, Image, Card, Col } from 'react-bootstrap';
import coleBefore from '../Images/coleStepsBefore.jpeg'
import coleAfter from '../Images/coleStepsAfter.jpeg'


const BeforeAfterCarousel = () => {
  return (
    <>
      <Col md={6}>
        <Card style={{ width: 'auto' }} className='rounded'>
          <Carousel fade>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={coleBefore}
            alt="Picture of janky handrail"
          />
          <Carousel.Caption>
            <h3>Before</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={coleAfter}
            alt="Picture of new handrail"
          />

          <Carousel.Caption>
            <h3>After</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
          <Card.Body>
            <Card.Title>Deck refresh</Card.Title>
            <Card.Text>
             New paint and handrail bringing it up to code.
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
    </>
  );
};

export default BeforeAfterCarousel;
