import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {adminLogin} from '../../../services/operations/authAPi'
const AdminLoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        
        dispatch(adminLogin(formData.email , formData.password, navigate))

    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] h-full '
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span onClick={() => setShowPassword((prev) => !prev)}
            
            className='absolute right-3 top-[38px] cursor-pointer'
            >
                {showPassword ? (<AiOutlineEyeInvisible
                    fontSize={24} fill='#AFB3bf'
                />) : (<AiOutlineEye  fontSize={24} fill='#AFB3bf'/>)}
            </span>

            <Link to="/forgetpassword">
                <p className='text-xs mt-1 max-w-max ml-auto  text-blue-100'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default AdminLoginForm
