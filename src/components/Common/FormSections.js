import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const sections = [
    { title: ["PERSONAL", "INFORMATION"], link: "/profile" },
    { title: ["EDUCATION", "DETAILS"], link: "/education" },
    { title: ["CONTACT", "DETAILS"], link: "/contact-details" },
    { title: ["FAMILY", "DETAILS"], link: "/family" },
    { title: ["FATHER FAMILY", "DETAILS"], link: "/father" },
    { title: ["MOTHER FAMILY", "DETAILS"], link: "/mother" },
    { title: ["WORK", "HISTORY"], link: "/work" },
    { title: ["SPECIAL", "INFORMATION"], link: "/special" },
    { title: ["FRIENDS", "DETAILS"], link: "/friends" },
    { title: ["PROPERTY", "DETAILS"], link: "/property" },
    { title: ["RELATIVES", "DETAILS"], link: "/relative" },
    { title: ["UPLOAD", "DOCUMENTS"], link: "/docs" },
];

const Section = ({ title, bgColor, link }) => (
    <div className="flex w-full sm:w-[170px] sm:h-[70px]">
        <div className={`flex w-full h-auto rounded-3xs ${bgColor} sm:w-[170px] sm:h-[70px]`}>
            <div className="leading-[130%] font-semibold flex items-center w-full h-auto p-3 sm:p-0 sm:w-[170px] sm:h-[70px]">
                {link ? (
                    <Link to={link} style={{ color: 'inherit', textDecoration: 'none' }} className="[line-break:anywhere] w-full">
                        {title.map((line, index) => (
                            <p key={index} className="m-0">{line}</p>
                        ))}
                    </Link>
                ) : (
                    <span className="[line-break:anywhere] w-full">
                        {title.map((line, index) => (
                            <p key={index} className="m-0">{line}</p>
                        ))}
                    </span>
                )}
            </div>
        </div>
    </div>
);

const SectionList = () => {
    const location = useLocation();

    return (
        <div className="w-3/4 flex flex-row flex-wrap items-center justify-center gap-[5px] text-center text-sm">
            {sections.map((section, index) => {
                const bgColor = location.pathname === section.link ? "bg-primary-main" : "bg-creamy-ivory";
                return <Section key={index} {...section} bgColor={bgColor} />;
            })}
        </div>
    );
};

export default SectionList;
