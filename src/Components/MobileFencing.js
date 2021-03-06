import React from 'react';
import { Carousel, Image, Card } from 'react-bootstrap';
import fences from '../Images/337Fences.jpeg';
import fences2 from '../Images/mobileFence2.jpeg';
import fences3 from '../Images/mobileFence3.jpeg';
import fences4 from '../Images/mobileFence4.jpeg';

const MobileFencing = () => {
  return (
    <>
      <Card style={{ width: 'auto' }} className='rounded text-center'>
        <Carousel fade>
          <Carousel.Item>
            <Image className='d-block w-100' src={fences} alt='mobile fences' />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src={fences2}
              alt='mobile fences'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src={fences3}
              alt='mobile fences'
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className='d-block w-100'
              src={fences4}
              alt='mobile fences'
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>Mobile fencing</Card.Title>
          <Card.Text>
            Moveable fencing solutions for privacy without permenance
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MobileFencing;
