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
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);

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
    <div className="min-h-screen flex flex-col py-24 justify-center items-center bg-khaki-100">
      <div className="flex flex-col w-full max-w-60 min-[424px]:max-w-xs sm:max-w-sm bg-white p-6 sm:p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">
          Sign Up <span className="text-red">as Admin!</span>
        </h1>
        <p className="text-gray-500 mb-8 text-center">
          To join us, fill out the form below and we’ll get back to you within 24 hours.
        </p>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
          <label className="w-full flex flex-col">
            <p className="mb-1 text-sm sm:text-[0.875rem] leading-[1.375rem] text-gray-900">First Name<sup className="text-pink-200">*</sup></p>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="First Name"
              className="bg-white rounded-lg text-gray-900 p-3 border-[1px] border-solid border-stroke-little"
              required
            />
          </label>
          <label className="w-full flex flex-col">
            <p className="mb-1 text-sm sm:text-[0.875rem] leading-[1.375rem] text-gray-900">Last Name<sup className="text-pink-200">*</sup></p>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Last Name"
              className="bg-white rounded-lg text-gray-900 p-3 border-[1px] border-solid border-stroke-little"
              required
            />
          </label>
          <label className="w-full flex flex-col">
            <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Email<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Email"
              className="bg-white rounded-lg text-gray-900 p-3 border-[1px] border-solid border-stroke-little"
              required
            />
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Password<sup className="text-pink-200">*</sup>
            </p>
            <div className={`flex justify-between rounded-lg border-[1px] border-solid ${isFocused1 ? 'border-[2px] border-solid' : 'border-stroke-little'
              }`}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Password"
                onFocus={() => setIsFocused1(true)}
                onBlur={() => setIsFocused1(false)}
                className="bg-white rounded-lg text-gray-900 p-3 w-4/5 outline-none"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}
                className="flex items-center px-3 cursor-pointer">
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB3bf' />) : (<AiOutlineEye fontSize={24} fill='#AFB3bf' />)}
              </span>
            </div>
          </label>
          <label className="w-full flex flex-col">
            <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <div className={`flex justify-between rounded-lg border-[1px] border-solid ${isFocused ? 'border-[2px] border-solid' : 'border-stroke-little'
              }`}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="bg-white rounded-lg text-gray-900 w-4/5 p-3 outline-none"
                required
              />
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="flex items-center px-3 cursor-pointer">
                {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB3bf' />) : (<AiOutlineEye fontSize={24} fill='#AFB3bf' />)}
              </span>
            </div>
          </label>
          <button type="submit" className="w-full bg-red rounded-lg text-white py-2 mt-4 cursor-pointer">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default AdminSignupForm;
