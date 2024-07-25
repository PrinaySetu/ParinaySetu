import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPasswordResetToken } from '../services/operations/authAPi';
import { BiArrowBack } from "react-icons/bi";

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        dispatch(getPasswordResetToken(email, setEmailSent));
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-cornsilk px-4">
            {
                loading ? (
                    <div className="spinner"></div>
                ) : (
                    <div className="flex flex-col w-full max-w-60 min-[424px]:max-w-xs sm:max-w-sm lg:max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-md">
                        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-richblack-5">
                            {!emailSent ? "Forgot Password?" : "Check Email"}
                        </h1>

                        <p className="text-gray-500 mb-8 text-[1.125rem] leading-[1.625rem]">
                            {!emailSent ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery."
                                : `We have sent an email to ${email}`}
                        </p>

                        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-4">
                            {
                                !emailSent && (
                                    <label className="w-full flex flex-col">
                                        <p className="mb-1 text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
                                            Email Address <sup className="text-pink-200">*</sup>
                                        </p>
                                        <input
                                            required
                                            type='email'
                                            value={email}
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            className="bg-white rounded-lg text-gray-900 p-3 border-[1px] border-solid border-stroke-little"
                                        />
                                    </label>
                                )
                            }
                            <button
                                type='submit'
                                className="mt-6 w-full bg-khaki-100 rounded-lg text-white py-2 cursor-pointer">
                                {!emailSent ? "Reset Password" : "Resend Email"}
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
                )
            }
        </div>
    );
};

export default ForgetPassword;
