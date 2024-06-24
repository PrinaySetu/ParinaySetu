import Rightarrow from '../../../assets/img/bx-right-arrow-alt.png';
import Leftarrow from '../../../assets/img/bx-left-arrow-alt.png';
import logo from '../../../assets/img/Logo-parinay-setu.png';
import { Link } from 'react-router-dom';
import FormSections from '../../Common/FormSections';
import NavigationButtons from '../../Common/BottomNavigation';
import Header from '../../Common/Header';

const Property1FamilyForm = () => {


    return (
        <div className="w-full relative bg-white h-[2093px] overflow-hidden text-center text-45xl text-black font-subheading">
            <Header />
            <FormSections />
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
                <NavigationButtons previousLink='/contact-details' nextLink='/background-details' />
            </div>
        </div>);
};

export default Property1FamilyForm;
