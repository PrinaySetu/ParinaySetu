import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { sendOtp } from '../../../services/operations/authAPi';
import { setSignupData } from '../../../slices/authSlice';

const AdminSignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'admin', // Set default userType to 'admin'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const signupData = { ...formData, userType: 'admin' }; // Ensure userType is 'admin'

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate));

    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: 'admin', // Reset userType to 'admin'
    });
  };

  return (
    <div className="min-h-screen flex flex-col py-[100px] justify-center items-center bg-khaki-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md relative">
        <h1 className="text-4xl font-extrabold mb-4">
          Sign Up <span className="text-red">as Admin!</span>
        </h1>
        <p className="text-gray-500 mb-8">
          To join us, fill out the form below and we’ll get back to you within 24 hours.
        </p>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4 text-black">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-900">First Name</p>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="First Name"
              className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-900">Last Name</p>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Last Name"
              className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-900">Email</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Email"
              className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
            />
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-900">Password</p>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Password"
              className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-1 top-[50px] cursor-pointer">
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB3bf' /> : <AiOutlineEye fontSize={24} fill='#AFB3bf' />}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-900">Confirm Password</p>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-1 top-[50px] cursor-pointer">
              {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB3bf' /> : <AiOutlineEye fontSize={24} fill='#AFB3bf' />}
            </span>
          </label>
          <button type="submit" className="w-full bg-red rounded-lg text-white py-2 mt-4">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default AdminSignupForm;
