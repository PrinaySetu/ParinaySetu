import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link, matchPath } from 'react-router-dom';
import ProfileDropdown from "../core/Auth/ProfileDropDown";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const onContactUsTextClick = () => {
    // Implement the functionality for contact us click
  };

  const getNavItemClass = (path) => {
    return matchRoute(path)
      ? "shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-[15px] bg-white py-3.5 px-6 text-red"
      : "text-gray-600 hover:text-red";
  };

  return (
    <div className="relative z-[999]">
      <div className={`absolute w-[calc(100%_-_114px)] top-[35px] right-[60px] left-[54px] rounded-[30px] bg-khaki-100 h-[125px] text-xl ${location.pathname !== "/" ? "bg-richblack-800" : ""} transition-all duration-200`}>
        <div className="absolute top-[calc(50%_-_27.5px)] right-[129px] flex flex-row items-center justify-end gap-[48px]">
          <div className={getNavItemClass("/")}>
            <div className="relative leading-[150%] font-medium"><Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></div>
          </div>
          <div className="relative leading-[150%] font-medium cursor-pointer">Pricing</div>
          <div className="relative leading-[150%] font-medium cursor-pointer" onClick={onContactUsTextClick}>Contact Us</div>
          {token === null && (
            <>
              <div className={getNavItemClass("/login")}>
                <div className="relative leading-[150%] font-medium">
                  <Link to='/login' style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link>
                </div>
              </div>
              <div className={getNavItemClass("/signup")}>
                <div className="relative leading-[150%] font-medium">
                  <Link to='/signup' style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
                </div>
              </div>
            </>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <div className="absolute top-[calc(50%_-_70.5px)] left-[32px] w-[241.6px] h-[133.3px] text-45xl font-niconne">
          <div className="absolute top-[calc(50%_-_66.65px)] left-[0px] inline-block w-[240.4px] h-[86.7px]">Parinay</div>
          <div className="absolute top-[calc(50%_-_8.88px)] left-[123.98px] text-37xl text-red inline-block w-[117.7px] h-[75.5px]">Setu</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// import React from 'react'
// import { useEffect, useState } from "react"
// import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
// import { BsChevronDown } from "react-icons/bs"
// import { useSelector } from "react-redux"
// import { Link, matchPath, useLocation } from "react-router-dom"
// import { apiConnector } from "../../services/apiConnector"
// import { setLoading } from '../../slices/authSlice'
// import ProfileDropdown from "../core/Auth/ProfileDropDown"
// const Navbar = () => {
//   const { token } = useSelector((state) => state.auth)
//   const { user } = useSelector((state) => state.profile)
//   const location = useLocation();
//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname)
//   }
//   return (
//     <div>
//       <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${location.pathname !== "/" ? "bg-richblack-800" : ""
//         } transition-all duration-200`}>
//         <div>
//           {/* Logo */}
//           <Link to='/'>
//             <img src='' alt='logo' width={160} height={32} loading="lazy" />
//           </Link>
//           {/* Navigation Links */}
//           <nav>
//             {token === null && (
//               <Link to="/login">
//                 <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                   Log in
//                 </button>
//               </Link>
//             )}
//             {token === null && (
//               <Link to="/signup">
//                 <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                   Sign up
//                 </button>
//               </Link>
//             )}
//             {token !== null && <ProfileDropdown />}
//           </nav>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
