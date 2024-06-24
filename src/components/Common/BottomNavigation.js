import React from 'react';
import Rightarrow from '../../assets/img/bx-right-arrow-alt.png';
import Leftarrow from '../../assets/img/bx-left-arrow-alt.png';
import { Link } from 'react-router-dom';

const NavigationButtons = ({ previousLink, nextLink }) => {
    return (
        <>
            {previousLink && (
                <Link to={previousLink} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="absolute bottom-[74px] left-[80px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-primary-main flex flex-row items-center justify-center py-3.5 px-6 gap-[8px] text-base">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src={Leftarrow} />
                        <i className="relative leading-[150%] font-medium">Previous</i>
                    </div>
                </Link>
            )}
            {nextLink && (
                <Link to={nextLink} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="absolute bottom-[74px] left-[1025px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-primary-main flex flex-row items-center justify-center py-3.5 px-6 gap-[8px] text-base">
                        <i className="relative leading-[150%] font-medium">Next</i>
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src={Rightarrow} />
                    </div>
                </Link>
            )}
        </>
    );
};

export default NavigationButtons;
