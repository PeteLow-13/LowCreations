import React from 'react';
import { Col, Row, Image, Card } from 'react-bootstrap';
import lookout from '../Images/leschiLookout.jpeg'
import fence from '../Images/clearCedarFence2.jpeg'
import plumbing from '../Images/plumbingTools.jpeg'
import electric from '../Images/electricalTools.jpeg'
import cabin from '../Images/cabinDeckAfter.jpeg'
import safe from '../Images/covidSafe.jpeg'

const HomeScreen = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <Image src={lookout} alt='seattle' style={{ width: 'auto' }} fluid/>
        </Col>
      </Row>
      <h1>Low Creations</h1>
      <h3>Handyman and Repair Services</h3>
      <Row>
        <Col md={6}>
        <Card style={{ width: 'auto' }} className='rounded'>
          <Card.Img variant="top" src={plumbing}/>
          <Card.Body>
            <Card.Title>Plumbing</Card.Title>
            <Card.Text>
             Got a job that's too much for you and not enough for a plumber? Talk to us about it.
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
        <Card style={{ width: 'auto' }} className='rounded'>
          <Card.Img variant="top" src={electric}/>
          <Card.Body>
            <Card.Title>Minor Electrical</Card.Title>
            <Card.Text>
             Do you have an outlet or a light fixture you'd like to update? Let's talk about it.
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row>
        <Col md={6}>
        <Card style={{ width: 'auto' }} className='rounded'>
          <Card.Img variant="top" src={cabin} className='fluid'/>
          <Card.Body>
            <Card.Title>Interior, Exterior or Deck painting</Card.Title>
            <Card.Text>
             Paint need a refresh? 
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
        <Card style={{ width: 'auto' }} className='rounded'>
          <Card.Img variant="top" src={fence}/>
          <Card.Body>
            <Card.Title>Custom Fences</Card.Title>
            <Card.Text>
             
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row>
        {/* <Col md={6}>
          <h4>So much to do?</h4>
          <p>Other projects </p>
        </Col> */}
          <Col md={6}></Col>
        <Col md={3}>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" src={safe}/>
          {/* <Card.Body>
            <Card.Title>Fully Vaccinated</Card.Title>
            <Card.Text>
              We take COVID safety very seriously.
            </Card.Text>
          </Card.Body> */}
          </Card>
          </Col>
          <Col md={3}>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
            <Card.Title>Fully Vaccinated</Card.Title>
            <Card.Text>
              We take safety very seriously. All of our employees are vaccinated.
            </Card.Text>
          </Card.Body></Card>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
