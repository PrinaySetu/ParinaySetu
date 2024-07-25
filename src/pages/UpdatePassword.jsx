import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../services/operations/authAPi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

const UpdatePassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { password, confirmPassword } = formData;
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split('/').at(-1);
    dispatch(resetPassword(password, confirmPassword, token));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cornsilk px-4">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex flex-col w-full max-w-60 min-[424px]:max-w-xs sm:max-w-sm lg:max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-extrabold mb-4 text-richblack-5">
            Choose new password
          </h1>
          <p className="my-4 text-[1.125rem] leading-[1.625rem] text-gray-500">
            Almost done. Enter your new password and you're all set.
          </p>
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
            <label className="flex flex-col w-full">
              <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
                New Password <sup className="text-pink-200">*</sup>
              </p>
              <div className={`flex justify-between rounded-lg border-[1px] border-solid ${isFocused1 ? 'border-[2px] border-solid' : 'border-stroke-little'
                }`}>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  onFocus={() => setIsFocused1(true)}
                  onBlur={() => setIsFocused1(false)}
                  className="bg-white rounded-lg text-gray-900 p-3 w-4/5 outline-none"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="flex cursor-pointer items-center px-3"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>

            </label>
            <label className="w-full flex flex-col">
              <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
                Confirm New Password <sup className="text-pink-200">*</sup>
              </p>
              <div className={`flex justify-between rounded-lg border-[1px] border-solid ${isFocused ? 'border-[2px] border-solid' : 'border-stroke-little'
                }`}>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="bg-white rounded-lg text-gray-900 w-4/5 p-3 outline-none"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="flex items-center px-3 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-khaki-100 py-2 font-medium text-white"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-darkblue">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
