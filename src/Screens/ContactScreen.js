import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';



const ContactScreen = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <h2>reach out </h2>
      
      <p className='text-center'><a href='mailto:lowcreationswa@gmail.com'>lowcreationswa@gmail.com</a></p>
      <h3>Phone:</h3>
      <p className='text-center'><a href='tel:206-617-8254'>206-617-8254</a> </p>
      <Row>
        <Col sm={12} md={12} lg={6} xl={6}>
          {/* <Card style={{ width: 'auto' }} className='rounded'> */}
          
        
        <Card className="text-center rounded" style={{ width: 'auto', height: 'auto'}} >
          <Card.Header>Email</Card.Header>
          <Card.Body>
            <Card.Title>lowcreationswa@gmail.com</Card.Title>
            <Card.Text>
              Let us know what project you have in mind and we'll get back to you as soon as we can.
            </Card.Text>
            <Button variant="primary" href='mailto:lowcreationswa@gmail.com'>Email</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Anytime</Card.Footer>
        </Card>
        </Col>
        <Col md={6}>
        <Card className="text-center rounded">
          <Card.Header>Phone</Card.Header>
          <Card.Body>
            <Card.Title>Call or text</Card.Title>
            <Card.Text>
              206-217-8254
            </Card.Text>
            <Button variant="primary" href='tel:206-617-8254'>Call</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Between 9 and 6</Card.Footer>
        </Card>
        </Col>
        </Row>
    </>
  );
};

export default ContactScreen;
