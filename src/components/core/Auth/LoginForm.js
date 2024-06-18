import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../services/operations/authAPi';
import HomeIcon from '../../../assets/img/bxs-home.svg';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "", password: ""
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
        dispatch(login(formData.email, formData.password, navigate))
        // navigate('/');
    }

    return (
        <div className="min-h-screen flex flex-col pt-[125px] justify-center items-center bg-cornsilk">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md relative">
                <h1 className="text-4xl font-extrabold mb-4">
                    Log In <span className="text-red">Yourself!</span>
                </h1>
                <p className="text-gray-500 mb-8">
                    To contact us, fill out the form below and we’ll get back to you within 24 hours.
                </p>
                <form onSubmit={submitHandler} className="flex flex-col gap-y-4">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
                            Email Address<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder="Enter email id"
                            name="email"
                            className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
                        />
                    </label>
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-gray-900 mb-1 leading-[1.375rem]">
                            Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            name="password"
                            className="bg-white rounded-lg text-gray-900 w-full p-[12px] border-[1px] border-solid border-stroke-little"
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-1 top-[55px] cursor-pointer">
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB3bf' />) : (<AiOutlineEye fontSize={24} fill='#AFB3bf' />)}
                        </span>
                        <Link to="/forgetpassword">
                            <p className="text-xs mt-1 text-darkblue">Forgot Password</p>
                        </Link>
                    </label>
                    <button className="w-full bg-khaki-100 rounded-lg text-white py-2 mt-4 cursor-pointer">Sign In</button>
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

export default LoginForm;
