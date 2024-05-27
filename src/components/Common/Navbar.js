import React from 'react'
import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"
import { apiConnector } from "../../services/apiConnector"
import { setLoading } from '../../slices/authSlice'
import ProfileDropdown from "../core/Auth/ProfileDropDown"
const Navbar = () => {
    const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
    const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }
  return (
    <div>
      <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}>
            <div>
                {/* Logo */}
                <Link to='/'>
                    <img src='' alt='logo' width={160} height={32} loading="lazy" />
                </Link>
                {/* Navigation Links */}
                <nav>
                    {token === null &&(
                        <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
                    )}
                    {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
                </nav>
            </div>
      </div>
    </div>
  )
}

export default Navbar
