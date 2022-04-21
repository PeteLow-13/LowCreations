import React from 'react';
import { Carousel, Image, Card } from 'react-bootstrap';
import coleBefore from '../Images/coleStepsBefore.jpeg';
import coleAfter from '../Images/coleStepsAfter.jpeg';

const ColeCarousel = () => {
  return (
    <>
      <Card style={{ width: 'auto' }} className='rounded text-center'>
        <Carousel fade>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src={coleBefore}
              alt='Picture of janky handrail'
            />
            <Carousel.Caption>
              <h3 className='text-color-white'>Before</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src={coleAfter}
              alt='Picture of new handrail'
            />

            <Carousel.Caption>
              <h3>After</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>Step refresh</Card.Title>
          <Card.Text>
            New paint and handrail bringing steps up to code.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ColeCarousel;
