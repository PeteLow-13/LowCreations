import React from 'react';
import ContactForm from '../Components/ContactForm';

const ContactScreen = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <ContactForm />
      <h3>Or Call<a href='tel:206-617-8254'>206-617-8254</a> </h3>
    </>
  );
};

export default ContactScreen;
