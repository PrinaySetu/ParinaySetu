import React from 'react';
import ContactUsForm from './ContactUsForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-8">
          If you have any questions, please feel free to reach out to us. We are here to help!
        </p>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactPage;
