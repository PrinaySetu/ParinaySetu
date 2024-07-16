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
      ? "shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-[15px] bg-white py-3.5 px-6 text-red justify-center"
      : "text-gray-600 hover:text-red";
  };

  return (
    // <section className="flex flex-col flex-wrap">
    <div className="flex flex-col min-[769px]:flex-row justify-center items-center bg-khaki-100 pr-4 pl-4 min-[769px]:pr-20 min-[769px]:pl-6 rounded-b-[30px] sm:rounded-[30px] mx-auto sm:my-4 w-full sm:w-[calc(100%_-_214px)] p-4">
      <div className="flex flex-col min-[769px]:flex-row justify-between items-center w-full">
        <div className="flex flex-col items-center min-[769px]:items-start">
          <p className="text-3xl sm:text-45xl font-niconne m-0">Parinay</p>
          <p className="text-2xl sm:text-37xl text-red font-niconne m-0 mt-[-10px] sm:mt-[-20px] sm:ml-[150px]">Setu</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-16 text-lg sm:text-xl mt-4 sm:mt-0">
          <div className={getNavItemClass("/")}>
            <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          </div>
          <div className="flex leading-[150%] text-lg sm:text-xl font-medium cursor-pointer">Pricing</div>
          <div className="flex leading-[150%] text-lg sm:text-xl font-medium cursor-pointer" onClick={onContactUsTextClick}>Contact Us</div>
          {token === null && (
            <>
              <div className={getNavItemClass("/login")}>
                <Link to='/login' style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link>
              </div>
              <div className={getNavItemClass("/signup")}>
                <Link to='/signup' style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
              </div>
            </>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
      </div>
    </div>
    // </section>
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
