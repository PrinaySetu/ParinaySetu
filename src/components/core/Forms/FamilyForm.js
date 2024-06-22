import Rightarrow from '../../../assets/img/bx-right-arrow-alt.png';
import Leftarrow from '../../../assets/img/bx-left-arrow-alt.png';
import logo from '../../../assets/img/Logo-parinay-setu.png';
import { Link } from 'react-router-dom';

const Property1FamilyForm = () => {

    const sections = [
        { title: ["PERSONAL", "INFORMATION"], bgColor: "bg-creamy-ivory", link: "/profile" },
        { title: ["EDUCATION/WORK", "HISTORY"], bgColor: "bg-creamy-ivory", link: "/education" },
        { title: ["CONTACT", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/contact-details" },
        { title: ["FAMILY", "DETAILS"], bgColor: "bg-primary-main", link: "" },
        { title: ["BACKGROUND", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/background-details" },
        { title: ["OTHER", "INFORMATION"], bgColor: "bg-creamy-ivory", link: "/special" },
        { title: ["GUARDIAN", "DETAILS"], bgColor: "bg-creamy-ivory", link: "" },
        { title: ["DECLARATION &", "ACKNOWLEDGEMENT"], bgColor: "bg-creamy-ivory", link: "/declaration-acknowledgement" },
        { title: ["TERMS &", "CONDITIONS"], bgColor: "bg-creamy-ivory", link: "/terms-conditions" },
        { title: ["UPLOAD", "DOCUMENTS"], bgColor: "bg-creamy-ivory", link: "/upload-documents" },
    ];

    const Section = ({ title, bgColor, link }) => (
        <div className="w-[170px] relative h-[70px]">
            <div className={`absolute top-[0px] left-[0px] rounded-3xs ${bgColor} w-[170px] h-[70px]`} />
            <div className="absolute top-[0px] left-[0px] leading-[130%] font-semibold flex items-center w-[170px] h-[71px]">
                {link ? (
                    <a href={link} style={{ color: 'inherit', textDecoration: 'none' }} className="[line-break:anywhere] w-full">
                        {title.map((line, index) => (
                            <p key={index} className="m-0">{line}</p>
                        ))}
                    </a>
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


    return (
        <div className="w-full relative bg-white h-[2093px] overflow-hidden text-center text-45xl text-black font-subheading">
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
            <div className="absolute top-[481px] left-[calc(50%_-_435px)] w-[870px] flex flex-row flex-wrap items-start justify-start gap-[5px] text-center text-sm">
                {sections.map((section, index) => (
                    <Section key={index} {...section} />
                ))}
            </div>
            <div className="absolute top-[715px] left-[calc(50%_-_610px)] rounded-3xs bg-creamy-ivory w-[1220px] h-[1300px] text-base">
                <i className="absolute top-[49px] left-[calc(50%_-_418px)] text-13xl tracking-[-0.02em] uppercase inline-block font-semibold w-[837px]"> family DETAILS</i>
                <div className="absolute top-[195px] left-[calc(50%_-_442px)] w-[885px] flex flex-col items-start justify-start text-xs">
                    <div className="self-stretch rounded bg-primary-light overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-dimgray">
                        <div className="self-stretch bg-gray-400 overflow-hidden flex flex-row items-start justify-start">
                            <div className="flex-1 bg-primary-light flex flex-col items-center justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]">
                                <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-2.5 px-3">
                                    <div className="relative leading-[130%] font-semibold">Alive</div>
                                </div>
                            </div>
                            <div className="w-[354px] bg-primary-light box-border flex flex-col items-center justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]">
                                <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-2.5 px-3">
                                    <div className="relative leading-[130%] font-semibold">Passed</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch bg-gray-400 overflow-hidden flex flex-row items-start justify-start">
                            {["Member", "Age", "Health Status"].map((text, index) => (
                                <div key={index} className="flex-1 bg-primary-light flex flex-col items-start justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]">
                                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-2.5 px-3">
                                        <div className="relative leading-[130%] font-semibold">{text}</div>
                                    </div>
                                </div>
                            ))}
                            {["Age at the time of death", "Year of death"].map((text, index) => (
                                <div key={index} className="w-[177px] bg-primary-light flex flex-col items-start justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]">
                                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-2.5 px-3">
                                        <div className="relative leading-[130%] font-semibold">{text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {Array(6).fill(0).map((_, rowIndex) => (
                            <div key={rowIndex} className="self-stretch bg-gray-400 overflow-hidden flex flex-row items-start justify-start">
                                {["Member", "Age", "Health Status"].map((field, colIndex) => (
                                    <div key={colIndex} className="w-[177px] bg-primary-light flex flex-col items-start justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]">
                                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                                            {field === "Member" || field === "Health Status" ? (
                                                <input type="text" className="flex-1 relative leading-[130%] bg-transparent border-none outline-none" />
                                            ) : (
                                                <input type="number" min="0" max="105" className="flex-1 relative leading-[130%] bg-transparent border-none outline-none" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {["Age at the time of death", "Year of death"].map((field, colIndex) => (
                                    <div key={colIndex} className="w-[179px] bg-primary-light flex flex-col items-start justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]">
                                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                                            <input type="number" min="0" max={field === "Year of death" ? new Date().getFullYear() : "105"} className="flex-1 relative leading-[130%] bg-transparent border-none outline-none" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>


                <div className="absolute top-[568px] left-[80px] w-[1060px] h-[50px] text-[20px]">
                    <div className="absolute top-[0px] left-[0px] bg-gainsboro box-border w-[1060px] h-[50px] border-[1px] border-solid border-black" />
                    <div className="absolute top-[11px] left-[calc(50%_-_515px)] tracking-[-0.02em] inline-block w-[1030px]">Note - If Brother/sister is married, Please provide the Details.</div>
                </div>
                <i className="absolute top-[728px] left-[calc(50%_-_418px)] text-13xl tracking-[-0.02em] uppercase inline-block font-semibold w-[837px]"> Wedding details</i>
                <div className="absolute top-[879px] left-[calc(50%_-_442px)] w-[885px] h-[196px] flex flex-col items-start justify-start text-xs">
                    <div className="self-stretch rounded bg--primary-light overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-dimgray">
                        <div className="self-stretch bg-gray-400 overflow-hidden flex flex-row items-start justify-start">
                            {["Name", "Relation", "Wedding Anniversary", "Husband/Wife Name", "Address of spouse's Guardian"].map((text, index) => (
                                <div key={index} className="self-stretch flex-1 bg-primary-light flex flex-col items-start justify-center border-[1px] border-solid border-dimgray">
                                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
                                        <div className="flex-1 relative leading-[130%] font-semibold">{text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {Array(4).fill(0).map((_, rowIndex) => (
                            <div key={rowIndex} className="self-stretch bg-gray-300 h-9 overflow-hidden flex flex-row items-start justify-start">
                                {Array(5).fill(0).map((_, colIndex) => (
                                    <div key={colIndex} className="self-stretch flex-1 bg-primary-light flex flex-col items-start justify-center border-[1px] border-solid border-dimgray">
                                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5">
                                            <input
                                                type="text"
                                                className="flex-1 relative leading-[130%] bg-transparent border-none outline-none"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <Link to='/background-details' style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="absolute bottom-[74px] left-[1025px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-primary-main flex flex-row items-center justify-center py-3.5 px-6 gap-[8px] text-base">
                        <i className="relative leading-[150%] font-medium">Next</i>
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src={Rightarrow} />
                    </div>
                </Link>
                <Link to='/contact-details' style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="absolute bottom-[74px] left-[80px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-primary-main flex flex-row items-center justify-center py-3.5 px-6 gap-[8px] text-base">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src={Leftarrow} />
                        <i className="relative leading-[150%] font-medium">Previous</i>
                    </div>
                </Link>
            </div>
        </div>);
};

export default Property1FamilyForm;
