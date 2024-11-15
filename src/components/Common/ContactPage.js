// ContactPage.jsx
import React from 'react';
import ContactUsForm from './ContactUsForm';
import Navbar from './Navbar';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cornsilk">
      <Navbar />
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          You may contact us using the information below:
        </p>
        <ul className="list-none text-gray-700 space-y-2">
          <li>
            <strong>Merchant Legal Entity Name:</strong> Parinay Setu
          </li>
          <li>
            <strong>Registered Address:</strong> C11 Vinay Nagar Sector 3, Behind Power House, Gwalior, Madhya Pradesh, 474012
          </li>
          <li>
            <strong>Mobile No:</strong> 9479425710
          </li>
          <li>
            <strong>Email ID:</strong> <a href="mailto:parinaysetu2701@gmail.com" className="text-blue-600 hover:underline">parinaysetu2701@gmail.com</a>
          </li>
        </ul>
      </div>
      <ContactUsForm bgcolor="bg-cornsilk" />
    </div>
  );
};

export default ContactPage;
