import React from 'react';
import logo from '../../assets/img/Logo-parinay-setu.png';

const Header = () => {
    return (<>
        <div className="absolute top-[55px] left-[calc(50%_-_207px)] w-[413.6px] h-[141.1px] font-niconne">
            <div className="absolute top-[0px] left-[calc(50%_-_34.8px)] w-[241.6px] h-[141px]">
                <div className="absolute top-[0px] left-[calc(50%_-_120.8px)] inline-block w-[240.4px] h-[91.7px]">Parinay</div>
                <div className="absolute top-[61.1px] left-[calc(50%_+_3.18px)] text-[56px] text-red inline-block w-[117.7px] h-[79.9px]">Setu</div>
            </div>
            <img className="absolute top-[0px] left-[calc(50%_-_206.8px)] w-[132.3px] h-[141.1px] object-cover" alt="Logo" src={logo} />
        </div>
        <div className="absolute top-[270px] left-[calc(50%_-_435px)] w-[837px] flex flex-col items-center justify-start gap-[24px]">
            <b className="self-stretch relative tracking-[-0.02em]">
                <span>{`Register `}</span>
                <span className="text-red">Yourself</span>
            </b>
            <div className="self-stretch relative text-5xl leading-[150%] text-gray-100">{`Tell us about yourself by filling up the form `}</div>
        </div>
    </>

    );
};

export default Header;
