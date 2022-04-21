import React from 'react';
import { Carousel, Image, Card } from 'react-bootstrap';
import cabinBefore from '../Images/cabinDeckBefore.jpeg';
import cabinAfter from '../Images/cabinDeckAfter.jpeg';
import cabinBefore2 from '../Images/cabinDeckBefore2.jpeg';
import cabinAfter2 from '../Images/cabinDeckAfter2.jpeg';

const CabinDeckCarousel = () => {
  return (
    <>
      <Card style={{ width: 'auto' }} className='rounded text-center'>
        <Carousel fade>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src={cabinBefore2}
              alt='deck before paint'
            />
            <Carousel.Caption>
              <h3>Before</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src={cabinAfter2}
              alt='Deck after paint'
            />

            <Carousel.Caption className='text-color-white'>
              <h3>After</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>Deck refresh</Card.Title>
          <Card.Text>New paint on cabin deck.</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CabinDeckCarousel;
