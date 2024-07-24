import React from 'react';
import ContactUsForm from './ContactUsForm';
import Navbar from './Navbar';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cornsilk">
      <Navbar />
      <ContactUsForm bgcolor="bg-cornsilk" />
    </div>
  );
};

export default ContactPage;
