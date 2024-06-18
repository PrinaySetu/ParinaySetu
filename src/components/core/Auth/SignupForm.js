import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { sendOtp } from '../../../services/operations/authAPi';
import { setSignupData } from '../../../slices/authSlice';
import HomeIcon from '../../../assets/img/bxs-home.svg';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'user',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword, userType } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords does not match');
      return;
    }

    const signupData = { ...formData };

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
      userType: 'user',
    });
  };

  return (
    <div className="min-h-screen flex flex-col pt-[150px] justify-center items-center bg-cornsilk">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-md relative mx-4"> {/* Added mx-4 for side margins */}
        <h1 className="text-4xl font-extrabold mb-4">
          Sign Up <span className="text-red">Yourself!</span>
        </h1>
        <p className="text-gray-500 mb-8">
          To create an account, fill out the form below and we’ll send you a verification email.
        </p>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
          <div className="flex gap-x-4">
            <label className="w-1/2">
              <p className="text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
                First Name<sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="First Name"
                className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
                required
              />
            </label>
            <label className="w-1/2">
              <p className="text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
                Last Name<sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="Last Name"
                className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
                required
              />
            </label>
          </div>
          <label className="w-full">
            <p className="text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Email"
              className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
              required
            />
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Password"
              className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}
              className="absolute right-1 top-[55px] cursor-pointer">
              {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB3bf' />) : (<AiOutlineEye fontSize={24} fill='#AFB3bf' />)}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
              required
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-1 top-[55px] cursor-pointer">
              {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB3bf' />) : (<AiOutlineEye fontSize={24} fill='#AFB3bf' />)}
            </span>
          </label>
          <button type="submit" className="w-full bg-khaki-100 rounded-lg text-white py-2 mt-4 cursor-pointer">Create Account</button>
        </form>
        {/* <div className="absolute top-14 right-11">
          <Link to="/">
            <img src={HomeIcon} alt="Home" className="w-8 h-8 cursor-pointer" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default SignupForm;
