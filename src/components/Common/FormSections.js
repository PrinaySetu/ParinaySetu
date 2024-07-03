import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
    { title: ["PERSONAL", "INFORMATION"], bgColor: "bg-creamy-ivory", link: "/profile" },
    { title: ["EDUCATION", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/education" },
    { title: ["CONTACT", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/contact-details" },
    { title: ["FAMILY", "DETAILS"], bgColor: "bg-primary-main", link: "/family" },
    { title: ["FATHER FAMILY", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/father" },
    { title: ["MOTHER FAMILY", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/mother" },
    { title: ["WORK", "HISTORY"], bgColor: "bg-creamy-ivory", link: "/work" },
    { title: ["SPECIAL", "INFORMATION"], bgColor: "bg-creamy-ivory", link: "/special" },
    { title: ["FRIENDS", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/friends" },
    { title: ["PROPERTY", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/property" },
    { title: ["RELATIVES", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/relative" },
    { title: ["UPLOAD", "DOCUMENTS"], bgColor: "bg-creamy-ivory", link: "/docs" },
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
    return (
        <div className="absolute top-[481px] left-[calc(50%_-_535px)] w-[1050px] flex flex-row flex-wrap items-start justify-start gap-[5px] text-center text-sm">
            {sections.map((section, index) => (
                <Section key={index} {...section} />
            ))}
        </div>
    );
};

export default SectionList;
