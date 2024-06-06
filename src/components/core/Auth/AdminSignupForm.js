
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
      <div className="">
        <form onSubmit={handleOnSubmit} className="w-full flex flex-col gap-y-4 text-black">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">First Name</p>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="First Name"
              className="input"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Last Name</p>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Last Name"
              className="input"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Email"
              className="input"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Password</p>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Password"
              className="input"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Confirm Password</p>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="input"
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <button type="submit" className="btn btn-primary mt-4">Create Account</button>
        </form>
      </div>
    );
}

export default AdminSignupForm
