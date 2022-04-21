import React from 'react';
import { Col, Row, Image, Card, Container } from 'react-bootstrap';
import lookout from '../Images/leschiLookout.jpeg';
import lookout3 from '../Images/leschiLookout3.jpeg';
import lookoutBanner from '../Images/leschiLookoutBanner.jpeg';
import cabinAfter from '../Images/cabinDeckAfter2.jpeg';
import fence from '../Images/clearCedarFence2.jpeg';
import plumbing from '../Images/plumbingTools.jpeg';
import electric from '../Images/electricalTools.jpeg';
import cabin from '../Images/cabinDeckAfter.jpeg';
import safe from '../Images/covidSafe.jpeg';

const HomeScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Card className='bg-dark text-white'>
          <Card.Img src={lookout3} alt='seattle' />
          <Card.ImgOverlay>
            <Card.Title>
              <h1>Low Creations</h1>
            </Card.Title>
            <Card.Text>
              <h2>Handyman and Repair Service</h2>
            </Card.Text>
            <Card.Text>
              <h3>Seattle, WA</h3>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Row>
      {/* <Row>
        <Col>
          <Card
            style={{ width: 'auto' }}
            className='rounded bg-dark text-black'
          >
            <Card.Img src={lookoutBanner} alt='seattle' />
            <Card.ImgOverlay>
              <Card.Title>
                <h1>Low Creations</h1>
              </Card.Title>
              <Card.Text>
                <h2>Handyman and Repair Services</h2>
              </Card.Text>
              <Card.Text>
                <h3>Seattle, WA</h3>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row> */}
      <br />
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Card style={{ width: 'auto' }} className='rounded'>
            <Card.Img variant='top' src={plumbing} />
            <Card.Body>
              <Card.Title className='text-center'>Plumbing</Card.Title>
              <Card.Text>
                Got a job that's too much for you and not enough for a plumber?
                Talk to us about it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Card style={{ width: 'auto' }} className='rounded'>
            <Card.Img variant='top' src={fence} />
            <Card.Body>
              <Card.Title className='text-center'>Custom Fences</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
      <br />
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Card style={{ width: 'auto' }} className='rounded'>
            <Card.Img variant='top' src={electric} />
            <Card.Body>
              <Card.Title className='text-center'>Electrical</Card.Title>
              <Card.Text>
                Outdated light fixtures or outlets you'd like to update?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
      <br />
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Card style={{ width: 'auto' }} className='rounded'>
            <Card.Img variant='top' src={cabinAfter} className='fluid' />
            <Card.Body>
              <Card.Title className='text-center'>
                Painting and staining
              </Card.Title>
              <Card.Text>
                Paint need a refresh? Interior, Exterior or Deck painting and
                staining
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
      <br />
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card style={{ width: 'auto' }} className='rounded'>
            <Card.Header>
              <h1>Contact Us</h1>
            </Card.Header>
            <Card.Body>
              <h3>
                We handle all sorts of jobs, get in touch and let us know what
                you've got in mind.
              </h3>
              <h3>Email:</h3>
              <h3>
                <a href='mailto:lowcreationswa@gmail.com'>
                  lowcreationswa@gmail.com
                </a>
              </h3>
              <h3>Phone:</h3>
              <h3>
                <a href='tel:206-617-8254'>206-617-8254</a>{' '}
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
      <br />
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card style={{ width: 'auto' }} className='rounded'>
            <Card.Body>
              <Card.Title className='text-center'>Covid Safe</Card.Title>
              <Card.Text>We take safety very seriously.</Card.Text>
              <Card.Img variant='bottom rounded' src={safe} className='fluid' />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
