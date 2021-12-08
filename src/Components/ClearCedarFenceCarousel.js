import React from 'react'
import { Carousel, Image, Card } from 'react-bootstrap';
import fenceBefore from '../Images/nunnFenceBefore.jpeg'
import fence1 from '../Images/clearCedarFence1.jpeg'
import fence2 from '../Images/clearCedarFence2.jpeg'
import fence3 from '../Images/clearCedarFence3.jpeg'

const ClearCedarFenceCarousel = () => {
    return (
        <>
        <Card style={{ width: 'auto' }} className='rounded text-center'>
          <Carousel fade>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={ fenceBefore }
            alt="Nuun fence before"
          />
          <Carousel.Caption>
            <h3 className='text-color-white'>Before</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={ fence1 }
            alt="Picture of new fence"
          />
          

          <Carousel.Caption>
            <h3>After</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={ fence2 }
            alt="Picture of new fence"
          />
          

          <Carousel.Caption>
            <h3>After</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={ fence3 }
            alt="Picture of new fence"
          />
          

          <Carousel.Caption>
            <h3>After</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
          <Card.Body>
            <Card.Title>New custom fences</Card.Title>
            <Card.Text>
             A new fence for added privacy matched to house exterior
            </Card.Text>
          </Card.Body>
          </Card>
    </> 
    )
}

export default ClearCedarFenceCarousel
