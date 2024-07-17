import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../../services/operations/authAPi';
import HomeIcon from '../../../assets/img/bxs-home.svg'; // Add this if you have a home icon

const AdminLoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isFocused, setIsFocused] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        dispatch(adminLogin(formData.email, formData.password, navigate));
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-khaki-100 px-4">
            <div className="flex flex-col w-full max-w-60 min-[424px]:max-w-xs sm:max-w-sm bg-white p-6 sm:p-8 rounded-2xl shadow-md">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">
                    Login As <span className="text-red">Admin!</span>
                </h1>
                <p className="text-gray-500 mb-8 text-center">
                    To contact us, fill out the form below and we’ll get back to you within 24 hours.
                </p>
                <form onSubmit={submitHandler} className="flex flex-col gap-y-4">
                    <label className="w-full flex flex-col">
                        <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
                            Email Address<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder="Enter email id"
                            name="email"
                            className="bg-white rounded-lg text-gray-900 p-3 border-[1px] border-solid border-stroke-little"
                        />
                    </label>
                    <label className="w-full flex flex-col">
                        <p className="text-sm sm:text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
                            Password<sup className="text-pink-200">*</sup>
                        </p>
                        <div className={`flex justify-between rounded-lg border-[1px] border-solid ${isFocused ? 'border-[2px] border-solid' : 'border-stroke-little'
                            }`}>
                            <input
                                required
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={changeHandler}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                placeholder="Enter Password"
                                name="password"
                                className="bg-white text-gray-900 p-3 w-4/5 outline-none rounded-lg"
                            />
                            <span
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="flex cursor-pointer items-center px-3"
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB3bf" />
                                ) : (
                                    <AiOutlineEye fontSize={24} fill="#AFB3bf" />
                                )}
                            </span>
                        </div>
                        <Link to="/forgetpassword">
                            <p className="text-xs mt-1 text-darkblue">Forgot Password</p>
                        </Link>
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-red rounded-lg text-white py-2 mt-4 cursor-pointer">Sign In</button>
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

export default AdminLoginForm;
