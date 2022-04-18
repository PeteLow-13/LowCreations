import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ContactScreen = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <h2>reach out </h2>

      <Row>
        <Col sm={12} md={12} lg={6} xl={6}>
          {/* <Card style={{ width: 'auto' }} className='rounded'> */}

          <Card
            className='text-center rounded'
            style={{ width: 'auto', height: 'auto' }}
          >
            <Card.Header>
              <h2>Email</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                Let us know what project you have in mind.
              </Card.Title>
              <Card.Text>
                <h4 className='text-center'>
                  <a href='mailto:lowcreationswa@gmail.com'>
                    lowcreationswa@gmail.com
                  </a>
                </h4>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted'>
              <h3>Anytime</h3>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='text-center rounded'>
            <Card.Header>
              <h2>Phone</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>Call or text</Card.Title>
              <Card.Text>
                <h4 className='text-center'>
                  <a href='tel:206-617-8254'>206-617-8254</a>{' '}
                </h4>
              </Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted'>
              <h3>Between 9 and 6</h3>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ContactScreen;
