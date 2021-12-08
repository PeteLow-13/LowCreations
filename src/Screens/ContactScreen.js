import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';



const ContactScreen = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <h2>reach out </h2>
      <h3>via:</h3>
      <h3>Email: </h3>
      <p className='text-center'><a href='mailto:lowcreationswa@gmail.com'>lowcreationswa@gmail.com</a></p>
      <h3>Phone:</h3>
      <p className='text-center'><a href='tel:206-617-8254'>206-617-8254</a> </p>
      <Row>
        <Col md={6}><Card style={{ width: 'auto' }} className='rounded'>
          {/* <Card.Img variant="top" src={plumbing}/> */}
          <Card.Body>
            <Card.Title>Plumbing</Card.Title>
            <Card.Text>
             Got a job that's too much for you and not enough for a plumber? Talk to us about it.
            </Card.Text>
          </Card.Body>
          </Card>
        </Col></Row>
    </>
  );
};

export default ContactScreen;
