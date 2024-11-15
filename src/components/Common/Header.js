import React from 'react';
import logo from '../../assets/img/Logo-parinay-setu.png';

const Header = () => {
    return (<>
        <div className="flex flex-col justify-center items-center px-4 py-2 gap-10">
            <div className="flex justify-center items-center gap-4">
                <img src={logo} alt="Logo" className="w-20 h-20 xl:w-40 xl:h-40" />
                <div className="flex flex-col justify-center items-center font-niconne">
                    <p className="text-black m-0 text-40xl xl:text-45xl">Parinay</p>
                    <p className="self-end text-red m-0 mt-[-20px] mr-[-20px] text-40xl xl:text-45xl">Setu</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 xl:gap-4">
                <div className='flex gap-1 sm:gap-2 xl:gap-5 font-medium text-13xl sm:text-21xl xl:text-45xl '>
                    <p className="m-0 ">Register</p>
                    <p className="m-0 text-red">Yourself</p>
                </div>
                <div className="flex m-0 text-base sm:text-xl xl:text-5xl text-gray-100">Tell us about yourself by filling up the form</div>
            </div>
        </div>
    </>

    );
};

export default Header;
