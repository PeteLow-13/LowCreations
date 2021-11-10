import React from 'react';
import { Card } from 'react-bootstrap'
import Profile from '../Images/profile.jpeg'

const AboutScreen = () => {
  return (
    <>
      <h1>About Us</h1>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ Profile } />
  <Card.Body>
    <Card.Title>Pete</Card.Title>
    <Card.Text>
    I founded LC Handywork during the pandemic of 2020-21 when it became necessary to strike out on my own to accomidate new schedules. I have a varied background and have done many types of jobs. My background is varried but I have extensive experience doing many different types of work. My Background is in the restaurant world and I have exensive knowleded of comercial kitchens and equipment. I also do web development.
    </Card.Text>
  </Card.Body>
</Card>
    </>
  );
};

export default AboutScreen;
