// import { useState, useCallback } from 'react';
// import data from '../../../data/data.json';
// import Rightarrow from '../../../assets/img/bx-right-arrow-alt.png';
// import Leftarrow from '../../../assets/img/bx-left-arrow-alt.png';
// import logo from '../../../assets/img/Logo-parinay-setu.png';
// import { Link } from 'react-router-dom';

// const Property1SpecialForm = () => {

//   const sections = [
//     { title: ["PERSONAL", "INFORMATION"], bgColor: "bg-creamy-ivory", link: "/profile" },
//     { title: ["EDUCATION/WORK", "HISTORY"], bgColor: "bg-creamy-ivory", link: "/education" },
//     { title: ["CONTACT", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/contact-details" },
//     { title: ["FAMILY", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/family-details" },
//     { title: ["BACKGROUND", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/background-details" },
//     { title: ["OTHER", "INFORMATION"], bgColor: "bg-primary-main", link: "" },
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

//   const [image, setImage] = useState(null)

//   const onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       setImage(URL.createObjectURL(event.target.files[0]));
//     }
//   }

//   const [signature, setSignature] = useState(null);

//   const handleSignatureUpload = useCallback((e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSignature(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   }, []);

//   return (
//     <div className="w-full relative bg-white h-[2448px] overflow-hidden text-left text-45xl text-black font-subheading">
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
//         <div className="self-stretch relative text-5xl leading-[150%] text-gray">{`Tell us about yourself by filling up the form `}</div>
//       </div>
//       <div className="absolute top-[481px] left-[calc(50%_-_435px)] w-[870px] flex flex-row flex-wrap items-start justify-start gap-[5px] text-center text-sm">
//         {sections.map((section, index) => (
//           <Section key={index} {...section} />
//         ))}
//       </div>
//       <div className="absolute h-[calc(100%_-_793px)] top-[715px] bottom-[78px] left-[calc(50%_-_610px)] rounded-3xs bg-creamy-ivory w-[1220px] text-xl">
//         <div className="absolute top-[83px] left-[calc(50%_-_573px)] w-[759px] h-[271px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_379.5px)] tracking-[-0.02em] font-medium">Please describe what you are looking for in your potential life partner:</div>
//           <div className="absolute top-[45px] left-[0px] w-[759px] h-[226px] text-sm text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[759px] h-[226px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[calc(50%_-_100px)] left-[calc(50%_-_368.5px)] w-[737px] h-[200px] flex flex-row items-start justify-start p-3 box-border">
//                 <textarea className="w-full h-full resize-none leading-[130%] bg-inherit font-medium outline-none overflow-y-auto text-base" placeholder='Start typing Here'></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[374px] left-[calc(50%_-_574px)] w-[759px] h-[271px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_378.5px)] tracking-[-0.02em] font-medium whitespace-pre-wrap">{`If you are interested in any particular caste, please give details:   `}</div>
//           <div className="absolute top-[45px] left-[0px] w-[759px] h-[226px] text-sm text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[759px] h-[226px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[calc(50%_-_100px)] left-[calc(50%_-_368.5px)] w-[737px] h-[200px] flex flex-row items-start justify-start p-3 box-border">
//                 <textarea className="w-full h-full resize-none leading-[130%] bg-inherit font-medium outline-none overflow-y-auto text-base" placeholder='Start typing Here'></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[665px] left-[calc(50%_-_573px)] w-[394px] h-[94px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_197px)] tracking-[-0.02em] font-medium">Are you interested in inter caste marriage ?</div>
//           <div className="absolute top-[62px] left-[0px] w-[178px] h-8">
//             <div className="absolute top-[12.5%] left-[16.29%] tracking-[-0.02em]">
//               <input type="radio" id="yes" name="choice" value="yes" />
//               <label for="yes">Yes</label>
//             </div>
//             <div className="absolute top-[12.5%] left-[73%] tracking-[-0.02em]">
//               <input type="radio" id="no" name="choice" value="no" />
//               <label for="no">No</label>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[806px] left-[calc(50%_-_574px)] w-[759px] h-[270px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_378.5px)] tracking-[-0.02em] font-medium">Likes or Dislikes :</div>
//           <div className="absolute top-[44px] left-[0px] w-[759px] h-[226px] text-sm text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[759px] h-[226px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[calc(50%_-_100px)] left-[calc(50%_-_368.5px)] w-[737px] h-[200px] flex flex-row items-start justify-start p-3 box-border">
//                 <textarea className="w-full h-full resize-none leading-[130%] bg-inherit font-medium outline-none overflow-y-auto text-base" placeholder='Start typing Here'></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[1097px] left-[calc(50%_-_574px)] w-[759px] h-[270px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_378.5px)] tracking-[-0.02em] font-medium">{`Lifestyle: `}</div>
//           <div className="absolute top-[44px] left-[0px] w-[759px] h-[226px] text-sm text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[759px] h-[226px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[calc(50%_-_100px)] left-[calc(50%_-_368.5px)] w-[737px] h-[200px] flex flex-row items-start justify-start p-3 box-border">
//                 <textarea className="w-full h-full resize-none leading-[130%] bg-inherit font-medium outline-none overflow-y-auto text-base" placeholder='Start typing Here'></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[1409px] left-[calc(50%_+_390px)] w-[200px] h-[50px]">
//           <input type="file" accept="image/*" onChange={handleSignatureUpload} />
//           {signature && <img src={signature} alt="Signature" className="mt-4 w-full h-full object-contain" />}
//         </div>
//         <div className="absolute top-[1489px] left-[calc(50%_+_430px)] tracking-[-0.02em] font-medium">
//           Signature
//         </div>
//         <Link to='/guardian-details' style={{ color: 'inherit', textDecoration: 'none' }}>
//           <div className="absolute bottom-[74px] left-[1025px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-primary-main flex flex-row items-center justify-center py-3.5 px-6 gap-[8px] text-base">
//             <i className="relative leading-[150%] font-medium">Next</i>
//             <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src={Rightarrow} />
//           </div>
//         </Link>
//         <Link to='/background-details' style={{ color: 'inherit', textDecoration: 'none' }}>
//           <div className="absolute bottom-[74px] left-[80px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-primary-main flex flex-row items-center justify-center py-3.5 px-6 gap-[8px] text-base">
//             <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src={Leftarrow} />
//             <i className="relative leading-[150%] font-medium">Previous</i>
//           </div>
//         </Link>
//       </div>
//     </div>);
// };

// export default Property1SpecialForm;

// -----------------------------------------------------------------------------------------------------------------------------------------------------




import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addSpecial, updateSpecial, getUserSpecial } from '../../../services/operations/special';
import { useDispatch, useSelector } from "react-redux"
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';

const SpecialForm = () => {
  return (
    <div className="w-full relative bg-white text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <ProfileFormTemplate
        fields={data.special.fields} // Access the education fields directly from data.education
        createFunction={addSpecial}
        updateFunction={updateSpecial}
        getData={getUserSpecial}
      />
    </div>
  )
}

export default SpecialForm
