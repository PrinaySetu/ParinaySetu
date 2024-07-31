import React from 'react';
import ContactUsForm from './ContactUsForm';
import Navbar from './Navbar';
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from 'react-icons/ai';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cornsilk">
      <Navbar />
      <ContactUsForm bgcolor="bg-cornsilk" />
      <div className='flex flex-col w-full max-w-60 min-[424px]:max-w-xs sm:max-w-sm lg:max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-md mb-20'>
        <h2 className="text-5xl font-semibold text-red mb-4 text-center">Contact Information</h2>
        <div className="flex items-center mb-4">
          <AiOutlineHome className="text-5xl text-red mr-2" />
          <p className="text-gray-700"><strong>Address:</strong> 123 Main Street, Anytown, AN 12345</p>
        </div>
        <div className="flex items-center mb-4">
          <AiOutlinePhone className="text-5xl text-red mr-2 rotate-90" />
          <p className="text-gray-700"><strong>Phone:</strong> (123) 456-7890</p>
        </div>
        <div className="flex items-center">
          <AiOutlineMail className="text-5xl text-red mr-2" />
          <p className="text-gray-700"><strong>Email:</strong> contact@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
