import React from 'react';
import logo from '../../assets/img/Logo-parinay-setu.png';

const Header = () => {
    return (<>
        {/* <div className="left-[calc(50%_-_207px)] w-[413.6px] h-[141.1px] font-niconne">
            <div className="left-[calc(50%_-_34.8px)] w-[241.6px] h-[141px]">
                <div className="left-[calc(50%_-_120.8px)] inline-block w-[240.4px] h-[91.7px]">Parinay</div>
                <div className="left-[calc(50%_+_3.18px)] text-[56px] text-red inline-block w-[117.7px] h-[79.9px]">Setu</div>
            </div>
            <img className="left-[calc(50%_-_206.8px)] w-[132.3px] h-[141.1px] object-cover" alt="Logo" src={logo} />
        </div>
        <div className="left-[calc(50%_-_435px)] w-[837px] flex flex-col items-center justify-start gap-[24px]">
            <b className="self-stretch relative tracking-[-0.02em]">
                <span>{`Register `}</span>
                <span className="text-red">Yourself</span>
            </b>
            <div className="self-stretch relative text-5xl leading-[150%] text-gray-100">{`Tell us about yourself by filling up the form `}</div>
        </div> */}
        <div className="flex flex-col justify-center items-center px-4 py-2 gap-10">
            <div className="flex justify-center items-center gap-4">
                <img src={logo} alt="Logo" className="w-40 h-40" />
                <div className="flex flex-col justify-center items-center font-niconne">
                    <p className="text-gray-800 m-0">Parinay</p>
                    <p className="self-end text-red m-0 mt-[-20px] mr-[-20px]">Setu</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className='flex gap-5 font-medium'>
                    <p className="m-0 ">Register</p>
                    <p className="m-0 text-red">Yourself</p>
                </div>
                <div className="m-0 text-5xl text-gray-100">Tell us about yourself by filling up the form</div>
            </div>
        </div>
    </>

    );
};

export default Header;
