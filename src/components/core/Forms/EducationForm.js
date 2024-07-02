// import { useState, useCallback } from 'react';
// import data from '../../../data/data.json';
// import Rightarrow from '../../../assets/img/bx-right-arrow-alt.png';
// import Leftarrow from '../../../assets/img/bx-left-arrow-alt.png';
// import logo from '../../../assets/img/Logo-parinay-setu.png';
// import { Link } from 'react-router-dom';

// const Property1EducationForm = () => {
//   const sections = [
//     { title: ["PERSONAL", "INFORMATION"], bgColor: "bg-creamy-ivory", link: "/profile" },
//     { title: ["EDUCATION/WORK", "HISTORY"], bgColor: "bg-primary-main", link: "" },
//     { title: ["CONTACT", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/contact-details" },
//     { title: ["FAMILY", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/family-details" },
//     { title: ["BACKGROUND", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/background-details" },
//     { title: ["OTHER", "INFORMATION"], bgColor: "bg-creamy-ivory", link: "/special" },
//     { title: ["GUARDIAN", "DETAILS"], bgColor: "bg-creamy-ivory", link: "" },
//     { title: ["DECLARATION &", "ACKNOWLEDGEMENT"], bgColor: "bg-creamy-ivory", link: "/declaration-acknowledgement" },
//     { title: ["TERMS &", "CONDITIONS"], bgColor: "bg-creamy-ivory", link: "/terms-conditions" },
//     { title: ["UPLOAD", "DOCUMENTS"], bgColor: "bg-creamy-ivory", link: "/upload-documents" },
//   ];

//   const Section = ({ title, bgColor, link }) => (
//     <div className="w-[170px] relative h-[70px]">
//       <div className={`absolute top-[0px] left-[0px] rounded-3xs ${bgColor} w-[170px] h-[70px]`} />
//       <div className="absolute top-[0px] left-[0px] leading-[130%] font-semibold flex items-center w-[170px] h-[71px]">
//         {link ? (
//           <a href={link} style={{ color: 'inherit', textDecoration: 'none' }} className="[line-break:anywhere] w-full">
//             {title.map((line, index) => (
//               <p key={index} className="m-0">{line}</p>
//             ))}
//           </a>
//         ) : (
//           <span className="[line-break:anywhere] w-full">
//             {title.map((line, index) => (
//               <p key={index} className="m-0">{line}</p>
//             ))}
//           </span>
//         )}
//       </div>
//     </div>
//   );


//   return (
//     <div className="w-full relative bg-white h-[2063px] overflow-hidden text-left text-45xl text-black font-subheading">
//       <div className="absolute top-[55px] left-[calc(50%_-_207px)] w-[413.6px] h-[141.1px] font-niconne">
//         <div className="absolute top-[0px] left-[calc(50%_-_34.8px)] w-[241.6px] h-[141px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_120.8px)] inline-block w-[240.4px] h-[91.7px]">Parinay</div>
//           <div className="absolute top-[61.1px] left-[calc(50%_+_3.18px)] text-[56px] text-red inline-block w-[117.7px] h-[79.9px]">Setu</div>
//         </div>
//         <img className="absolute top-[0px] left-[calc(50%_-_206.8px)] w-[132.3px] h-[141.1px] object-cover" alt="Logo" src={logo} />
//       </div>
//       <div className="absolute top-[270px] left-[calc(50%_-_435px)] w-[837px] flex flex-col items-center justify-start gap-[24px] text-center">
//         <b className="self-stretch relative tracking-[-0.02em]">
//           <span>{`Register `}</span>
//           <span className="text-red">Yourself</span>
//         </b>
//         <div className="self-stretch relative text-5xl leading-[150%] text-gray-100">{`Tell us about yourself by filling up the form `}</div>
//       </div>
//       <div className="absolute top-[481px] left-[calc(50%_-_435px)] w-[870px] flex flex-row flex-wrap items-start justify-start gap-[5px] text-center text-sm">
//         {sections.map((section, index) => (
//           <Section key={index} {...section} />
//         ))}
//       </div>
//       <div className="absolute top-[715px] left-[calc(50%_-_610px)] rounded-3xs bg-creamy-ivory w-[1220px] h-[1270px] text-sm">
//         <i className="absolute top-[53px] left-[calc(50%_-_418px)] text-13xl tracking-[-0.02em] uppercase inline-block font-semibold text-center w-[837px]">
//           EDUCATIONAL DETAILS
//         </i>
//         <div className="absolute top-[139px] left-[calc(50%_-_495px)] w-[990px] flex flex-col items-start justify-start text-xs">
//           <div className="self-stretch rounded bg-primary-light overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-dimgray">
//             <div className="self-stretch bg-gray-400 h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start">
//               {["S. No.", "Qualification", "Board/University", "Year of passing", "Marks"].map((text, index) => (
//                 <div key={index} className={`self-stretch ${index === 0 ? "w-[79px]" : "flex-1"} bg-gray-300 flex flex-col items-start justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]`}>
//                   <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
//                     <i className="flex-1 relative leading-[130%] font-semibold">{text}</i>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {[
//               { sNo: 1, qualification: "Secondary" },
//               { sNo: 2, qualification: "Senior Secondary" },
//               { sNo: 3, qualification: "Diploma" },
//               { sNo: 4, qualification: "Graduation" },
//               { sNo: 5, qualification: "Post Graduation" }
//             ].map((item, rowIndex) => (
//               <div key={rowIndex} className="self-stretch bg-gray-400 h-9 overflow-hidden shrink-0 flex flex-row items-start justify-start">
//                 <div className="self-stretch w-[79px] bg-gray-400 flex flex-col items-start justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]">
//                   <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
//                     <input
//                       type="number"
//                       className="flex-1 relative leading-[130%] bg-transparent border-none outline-none"
//                       defaultValue={item.sNo}
//                       readOnly
//                     />
//                   </div>
//                 </div>
//                 <div className="self-stretch flex-1 bg-gray-400 flex flex-col items-start justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]">
//                   <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
//                     <input
//                       type="text"
//                       className="flex-1 relative leading-[130%] bg-transparent border-none outline-none"
//                       defaultValue={item.qualification}
//                       readOnly
//                     />
//                   </div>
//                 </div>
//                 {Array(3).fill(0).map((_, colIndex) => (
//                   <div key={colIndex + 2} className="self-stretch flex-1 bg-gray-400 flex flex-col items-start justify-center border-t-[1px] border-solid border-dimgray border-l-[1px]">
//                     <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-2.5 px-3">
//                       <input
//                         type={colIndex === 1 ? "number" : "text"}
//                         className="flex-1 relative leading-[130%] bg-transparent border-none outline-none"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//         <i className="absolute top-[398px] left-[calc(50%_-_418px)] text-13xl tracking-[-0.02em] uppercase inline-block font-semibold text-center w-[837px]"> OCCUPATION DETAILS</i>
//         <div className="absolute top-[484px] left-[55px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">{`Sources of Income : `}</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type='text' className="w-[362px] relative leading-[130%] font-medium flex items-center shrink-0 bg-inherit outline-none" />              </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[555px] left-[55px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">Name of present employer :</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type='text' className="w-[362px] relative leading-[130%] font-medium flex items-center shrink-0 bg-inherit outline-none" />              </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[626px] left-[55px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">Nature of actual work :</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type='text' className="w-[362px] relative leading-[130%] font-medium flex items-center shrink-0 bg-inherit outline-none" />              </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[697px] left-[55px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">Completed service period</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type='number' className="w-[362px] relative leading-[130%] font-medium flex items-center shrink-0 bg-inherit outline-none" />              </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[768px] left-[55px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">Annual Income</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type='number' className="w-[362px] relative leading-[130%] font-medium flex items-center shrink-0 bg-inherit outline-none" />              </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[839px] left-[55px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">Other sources of income</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type='text' className="w-[362px] relative leading-[130%] font-medium flex items-center shrink-0 bg-inherit outline-none" />              </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[910px] left-[54px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`If the boy/girl has financial responsibility of `}</p>
//               <p className="m-0">any other member of the family please give details.</p>
//             </div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type='text' className="w-[362px] relative leading-[130%] font-medium flex items-center shrink-0 bg-inherit outline-none" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[981px] left-[55px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`Please mention if the boy/girl has any `}</p>
//               <p className="m-0">other kind of financial responsibility</p>
//             </div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type='text' className="w-[362px] relative leading-[130%] font-medium flex items-center shrink-0 bg-inherit outline-none" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <Link to='/contact-details' style={{ color: 'inherit', textDecoration: 'none' }}>
//           <div className="absolute bottom-[74px] left-[1025px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-primary-main flex flex-row items-center justify-center py-3.5 px-6 gap-[8px] text-base">
//             <i className="relative leading-[150%] font-medium">Next</i>
//             <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src={Rightarrow} />
//           </div>
//         </Link>
//         <Link to='/profile' style={{ color: 'inherit', textDecoration: 'none' }}>
//           <div className="absolute bottom-[74px] left-[80px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-primary-main flex flex-row items-center justify-center py-3.5 px-6 gap-[8px] text-base">
//             <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src={Leftarrow} />
//             <i className="relative leading-[150%] font-medium">Previous</i>
//           </div>
//         </Link>
//       </div>
//     </div>);
// };

// export default Property1EducationForm;





import React from 'react';
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { createEducation, updateEducation, getUserEducation } from '../../../services/operations/education';
import { useDispatch, useSelector } from "react-redux"
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';

const EducationForm = () => {

  return (
    <div className="w-full relative bg-white text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <ProfileFormTemplate
        fields={data.education.fields} // Access the education fields directly from data.education
        createFunction={createEducation}
        updateFunction={updateEducation}
        getData={getUserEducation}
      />
    </div>
  );
};

export default EducationForm;
