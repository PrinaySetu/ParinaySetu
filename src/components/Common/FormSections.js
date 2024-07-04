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
    <div className="w-[170px] relative h-[70px]">
        <div className={`absolute top-[0px] left-[0px] rounded-3xs ${bgColor} w-[170px] h-[70px]`} />
        <div className="absolute top-[0px] left-[0px] leading-[130%] font-semibold flex items-center w-[170px] h-[71px]">
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
);

const SectionList = () => {
    const location = useLocation();

    return (
        <div className="absolute top-[481px] left-[calc(50%_-_535px)] w-[1050px] flex flex-row flex-wrap items-start justify-start gap-[5px] text-center text-sm">
            {sections.map((section, index) => {
                const bgColor = location.pathname === section.link ? "bg-primary-main" : "bg-creamy-ivory";
                return <Section key={index} {...section} bgColor={bgColor} />;
            })}
        </div>
    );
};

export default SectionList;
