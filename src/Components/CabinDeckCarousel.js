import React from 'react'
import { Carousel, Image, Card, Col } from 'react-bootstrap';



const CabinDeckCarousel = () => {
    return (
        <>
        <Col md={6}>
          <Card style={{ width: 'auto' }} className='rounded'>
            <Carousel fade>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={}
              alt="Picture of janky handrail"
            />
            <Carousel.Caption>
              <h3>Before</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={}
              alt="Picture of new handrail"
            />
  
            <Carousel.Caption className='text-color-white'>
              <h3>After</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
            <Card.Body>
              <Card.Title>Deck refresh</Card.Title>
              <Card.Text>
               Freshened up paint on 
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
      </>
    )
}

export default CabinDeckCarousel
