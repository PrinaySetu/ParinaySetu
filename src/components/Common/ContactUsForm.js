import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactUsForm = ({ bgcolor }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(serviceId, templateId, form.current, userId);
    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', contactNumber: '', email: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error.text);
        console.error(error);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${bgcolor} px-4 my-20`}>
      <div className="flex flex-col w-full max-w-60 min-[424px]:max-w-xs sm:max-w-sm lg:max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">Get in <span className="text-red">Touch</span></h1>
        <p className="text-gray-500 mb-8 text-center">
          If you have any questions, please feel free to reach out to us. We are here to help!
        </p>
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <label className="w-full flex flex-col" htmlFor="name">
            <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="bg-white rounded-lg text-gray-900 p-3 sm:p-[12px] border-[1px] border-solid border-stroke-little"
            />
          </label>
          <label className="w-full flex flex-col " htmlFor="contactNumber">
            <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Contact Number<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              placeholder="Enter contact number"
              className="bg-white rounded-lg text-gray-900 p-3 sm:p-[12px] border-[1px] border-solid border-stroke-little"
            />
          </label>
          <label className="w-full flex flex-col" htmlFor="email">
            <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Email<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              className="bg-white rounded-lg text-gray-900 p-3 sm:p-[12px] border-[1px] border-solid border-stroke-little"
            />
          </label>
          <label className="w-full flex flex-col" htmlFor="message">
            <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Message<sup className="text-pink-200">*</sup>
            </p>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              className="bg-white rounded-lg text-gray-900 p-3 sm:p-[12px] border-[1px] border-solid border-stroke-little"
            />
          </label>

          <button type="submit" className="w-full bg-khaki-100 rounded-lg text-white py-2 mt-4 cursor-pointer hover:bg-white hover:text-khaki-100 hover:border-solid hover:border-khaki-100 hover:border-[1px]">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;

