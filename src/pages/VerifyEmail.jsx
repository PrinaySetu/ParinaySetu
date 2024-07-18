import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { RxCountdownTimer } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp, signUp } from '../services/operations/authAPi';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate('/signup');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, userType } = signupData;

    dispatch(
      signUp(firstName, lastName, email, password, confirmPassword, userType, otp, navigate)
    );
  };

  return (
    <div className="flex flex-col min-h-screen place-items-center bg-khaki-100 px-4 py-24">
      {loading ? (
        <div>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="flex flex-col w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md bg-white p-8 rounded-2xl justify-center text-center shadow-md">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">
            Verify <span className="text-red">Email</span>
          </h1>
          <p className="text-gray-500 mb-8 text-center">
            A verification code has been sent to you. Enter the code below.
          </p>
          <form onSubmit={handleVerifyAndSignup} className="flex flex-col">
            <div className="px-8 sm:p-0">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    {...props}
                    placeholder="-"
                    style={{
                      boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)',
                    }}
                    className="flex w-[35px] md:w-[48px] lg:w-[60px] border-0 rounded-lg text-gray-900 border-[1px] border-solid border-stroke-little aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-500"
                  />
                )}
                containerStyle={{
                  justifyContent: 'space-between',
                  gap: '10px 6px',
                  flexWrap: 'wrap',
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red py-3 px-6 rounded-lg mt-6 font-medium text-white"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex flex-col items-center justify-between sm:flex-row">
            <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>
              <p className="text-gray-900 flex items-center gap-x-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-500 bg-white gap-x-2"
              onClick={() => dispatch(sendOtp(signupData.email))}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
