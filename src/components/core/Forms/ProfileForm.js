// import { useState, useCallback } from 'react';
// import { Dropdown } from 'primereact/dropdown';
// import 'primereact/resources/themes/saga-blue/theme.css'; // or any other theme
// import 'primereact/resources/primereact.css';
// import Rightarrow from '../../../assets/img/bx-right-arrow-alt.png';
// import logo from '../../../assets/img/Logo-parinay-setu.png';
// import data from '../../../data/data.json';
// import { Link } from 'react-router-dom';



// const Property1RegistrationForm = () => {

//   const [selectedGender, setSelectedGender] = useState(null);
//   const Genders = [
//     { name: 'Male', code: 'M' },
//     { name: 'Female', code: 'F' },
//     { name: 'Others', code: 'O' }
//   ];

//   const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
//   const BloodGroups = [
//     { name: 'A+', code: 'A+' },
//     { name: 'A-', code: 'A-' },
//     { name: 'B+', code: 'B+' },
//     { name: 'B-', code: 'B-' },
//     { name: 'AB+', code: 'AB+' },
//     { name: 'AB-', code: 'AB-' },
//     { name: 'O+', code: 'O+' },
//     { name: 'O-', code: 'O-' }
//   ];

//   const [selectedSkinColor, setSelectedSkinColor] = useState(null);
//   const SkinColors = [
//     { name: 'Fair', code: 'FA' },
//     { name: 'Light', code: 'LI' },
//     { name: 'Medium', code: 'ME' },
//     { name: 'Olive', code: 'OL' },
//     { name: 'Brown', code: 'BR' },
//     { name: 'Dark', code: 'DA' }
//   ];

//   const [selectedDietType, setSelectedDietType] = useState(null);
//   const DietTypes = [
//     { name: 'Vegetarian', code: 'V' },
//     { name: 'Vegan', code: 'VG' },
//     { name: 'Non-Vegetarian', code: 'NV' },
//     { name: 'Pescatarian', code: 'P' },
//     { name: 'Flexitarian', code: 'F' }
//   ];

//   const [selectedWeddingStatus, setSelectedWeddingStatus] = useState(null);
//   const WeddingStatuses = [
//     { name: 'Single', code: 'S' },
//     { name: 'Married', code: 'M' },
//     { name: 'Divorced', code: 'D' },
//     { name: 'Widowed', code: 'W' }
//   ];

//   const [selectedResidingStatus, setSelectedResidingStatus] = useState(null);
//   const ResidingStatuses = [
//     { name: 'Resident and Ordinarily Resident', code: 'ROR' },
//     { name: 'Resident but Not Ordinarily Resident', code: 'RNOR' },
//     { name: 'Non-Resident', code: 'NRI' }
//   ];

//   const [selectedMangalikStatus, setSelectedMangalikStatus] = useState(null);
//   const MangalikStatuses = [
//     { name: 'Manglik', code: 'M' },
//     { name: 'Non-Manglik', code: 'NM' },
//     { name: 'Not Sure', code: 'NS' }
//   ];

//   const [selectedDiseasedStatus, setSelectedDiseasedStatus] = useState(null);
//   const DiseasedStatuses = [
//     { name: 'Yes', code: 'Y' },
//     { name: 'No', code: 'N' },
//     { name: 'Not Sure', code: 'NS' }
//   ];

//   const sections = [
//     { title: ["PERSONAL", "INFORMATION"], bgColor: "bg-primary-main", link: "" },
//     { title: ["EDUCATION/WORK", "HISTORY"], bgColor: "bg-creamy-ivory", link: "/education" },
//     { title: ["CONTACT", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/contact-details" },
//     { title: ["FAMILY", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/family-details" },
//     { title: ["BACKGROUND", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/background-details" },
//     { title: ["OTHER", "INFORMATION"], bgColor: "bg-creamy-ivory", link: "/special" },
//     { title: ["GUARDIAN", "DETAILS"], bgColor: "bg-creamy-ivory", link: "/guardian-details" },
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

//   const [time, setTime] = useState('');

//   // Handler for time change
//   const handleTimeChange = (event) => {
//     setTime(event.target.value);
//   };

//   return (<>
//     <div className="w-full relative bg-black-white-white h-[1979px] overflow-hidden text-left text-45xl text-black-white-black font-subheading">
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
//       <div className="absolute top-[715px] left-[calc(50%_-_610px)] rounded-3xs bg-creamy-ivory w-[1220px] h-[1186px] text-sm">
//         <div className="absolute top-[42px] left-[56px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">{`Name : `}</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Enter your Name' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[42px] left-[662px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`Father's `}</p>
//               <p className="m-0">{`Name : `}</p>
//             </div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Enter your Fathers Name' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[113px] left-[56px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`Mother's `}</p>
//               <p className="m-0">{`Name : `}</p>
//             </div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Enter your Mothers Name' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[113px] left-[662px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`Guardian's `}</p>
//               <p className="m-0">{`Name : `}</p>
//             </div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Enter your Guardians Name' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[184px] left-[56px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`Guardian's `}</p>
//               <p className="m-0">{`Relation : `}</p>
//             </div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Enter your Relation' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[255px] left-[56px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">Birth Place</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Place of Birth' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[255px] left-[662px] w-[313px] h-[45px]">
//           <div className="absolute top-[calc(50%_-_8.5px)] left-[0px] overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">TOB:</div>
//           </div>
//           <div className="absolute top-[8px] left-[52px] w-[163px] h-7 overflow-hidden text-base font-overline">
//             <input
//               type="time"
//               value={time}
//               onChange={handleTimeChange}
//               className="absolute h-full w-full bg-primary-light top-0 right-0 bottom-0 left-0 rounded-[4.51px] box-border border-[0.5px] border-solid border-primary-main text-center outline-none"
//             />
//           </div>
//         </div>
//         <div className="absolute top-[184px] left-[662px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">DOB:</div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <input type='date' className="flex-1 relative leading-[150%] bg-inherit outline-none" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[326px] left-[56px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">{`Gender : `}</div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <Dropdown value={selectedGender} onChange={(e) => setSelectedGender(e.value)} options={Genders} optionLabel="name"
//                       placeholder="Select Gender" className="flex-1 relative leading-[150%] text-xs bg-inherit outline-none" checkmark={true} highlightOnSelect={false} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[326px] left-[443px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">{`Height : `}</div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <input type='number' className="flex-1 relative leading-[150%] bg-inherit outline-none" placeholder='Select Height (in cm)' />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[326px] left-[826px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">{`Weight : `}</div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <input type='number' className="flex-1 relative leading-[150%] bg-inherit outline-none" placeholder='Select Weight (in kg)' />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[397px] left-[56px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`Blood `}</p>
//               <p className="m-0">{`Group : `}</p>
//             </div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <Dropdown
//                       value={selectedBloodGroup}
//                       onChange={(e) => setSelectedBloodGroup(e.value)}
//                       options={BloodGroups}
//                       optionLabel="name"
//                       placeholder="Select Blood Group"
//                       className="flex-1 relative leading-[150%] text-xs bg-inherit outline-none"
//                       checkmark={true}
//                       highlightOnSelect={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[398px] left-[441px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">{`Skin Color : `}</div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <Dropdown
//                       value={selectedSkinColor}
//                       onChange={(e) => setSelectedSkinColor(e.value)}
//                       options={SkinColors}
//                       optionLabel="name"
//                       placeholder="Select Skin Color"
//                       className="flex-1 relative leading-[150%] text-xs bg-inherit outline-none"
//                       checkmark={true}
//                       highlightOnSelect={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[398px] left-[826px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">{`Diet Type : `}</div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <Dropdown
//                       value={selectedDietType}
//                       onChange={(e) => setSelectedDietType(e.value)}
//                       options={DietTypes}
//                       optionLabel="name"
//                       placeholder="Select Diet Type"
//                       className="flex-1 relative leading-[150%] text-xs bg-inherit outline-none"
//                       checkmark={true}
//                       highlightOnSelect={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[468px] left-[56px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">{`Disease : `}</div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <Dropdown
//                       value={selectedDiseasedStatus}
//                       onChange={(e) => setSelectedDiseasedStatus(e.value)}
//                       options={DiseasedStatuses}
//                       optionLabel="name"
//                       placeholder="Select if any disease"
//                       className="flex-1 relative leading-[150%] text-xs bg-inherit outline-none"
//                       checkmark={true}
//                       highlightOnSelect={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[468px] left-[662px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`Disease `}</p>
//               <p className="m-0">{`Description : `}</p>
//             </div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Mention some details about disease' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[539px] left-[56px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">{`Identification Mark : `}</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Identification Mark' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[539px] left-[662px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`Wedding `}</p>
//               <p className="m-0">{`Status : `}</p>
//             </div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <Dropdown
//                       value={selectedWeddingStatus}
//                       onChange={(e) => setSelectedWeddingStatus(e.value)}
//                       options={WeddingStatuses}
//                       optionLabel="name"
//                       placeholder="Select Wedding Status"
//                       className="flex-1 relative leading-[150%] text-xs bg-inherit outline-none"
//                       checkmark={true}
//                       highlightOnSelect={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[610px] left-[54px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">{`Citizenship : `}</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Enter your citizenship' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[610px] left-[662px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">Residing</p>
//               <p className="m-0">{`Status : `}</p>
//             </div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <Dropdown
//                       value={selectedResidingStatus}
//                       onChange={(e) => setSelectedResidingStatus(e.value)}
//                       options={ResidingStatuses}
//                       optionLabel="name"
//                       placeholder="Select Residing Status"
//                       className="flex-1 relative leading-[150%] text-xs bg-inherit outline-none"
//                       checkmark={true}
//                       highlightOnSelect={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[894px] left-[56px] flex flex-col items-start justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[10px]">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">Mangalik</p>
//               <p className="m-0">{`Status : `}</p>
//             </div>
//             <div className="w-[269px] h-[45px] flex flex-col items-center justify-center text-text-medium font-body-normal-400">
//               <div className="w-[269px] rounded bg-primary-light box-border h-[29px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-1 px-2 border-[1px] border-solid border-primary-main">
//                 <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
//                   <div className="flex-1 flex flex-row items-end justify-start">
//                     <Dropdown
//                       value={selectedMangalikStatus}
//                       onChange={(e) => setSelectedMangalikStatus(e.value)}
//                       options={MangalikStatuses}
//                       optionLabel="name"
//                       placeholder="Select Mangalik Status"
//                       className="flex-1 relative leading-[150%] text-xs bg-inherit outline-none"
//                       checkmark={true}
//                       highlightOnSelect={false}
//                       dropdownClassName="dropdown-open:bg-white"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[681px] left-[54px] flex flex-row items-center justify-start">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">{`Gotra `}</div>
//           </div>
//         </div>
//         <div className="absolute top-[752px] left-[54px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">{`Self : `}</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Enter your Gotra' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[752px] left-[662px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">{`Uncle : `}</div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Enter Uncles Gotra' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[823px] left-[54px] flex flex-row items-center justify-start gap-[47px]">
//           <div className="overflow-hidden flex flex-row flex-wrap items-center justify-center">
//             <div className="relative leading-[130%] font-medium">
//               <p className="m-0">{`Religion/ `}</p>
//               <p className="m-0">{`Caste : `}</p>
//             </div>
//           </div>
//           <div className="w-[387px] relative h-[45px] text-dark-dark-3">
//             <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-light box-border w-[387px] h-[45px] border-[1px] border-solid border-primary-main">
//               <div className="absolute top-[13px] left-[32px] w-[105px] h-[21px]" />
//               <div className="absolute top-[calc(50%_-_8.5px)] left-[12px] flex flex-row items-center justify-center">
//                 <input type="text" className="w-[362px] bg-inherit relative leading-[130%] font-medium flex items-center shrink-0 outline-none" placeholder='Enter your Religion or Caste' />
//               </div>
//             </div>
//           </div>
//         </div>
//         <Link to='/education' style={{ color: 'inherit', textDecoration: 'none' }}>
//           <div className="absolute top-[1052px] left-[1025px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-primary-main flex flex-row items-center justify-center py-3.5 px-6 gap-[8px] text-base cursor-pointer">
//             <div className="relative leading-[150%] font-medium">Next</div>
//             <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src={Rightarrow} />
//           </div>
//         </Link>

//       </div>
//     </div>
//   </>);
// };

// export default Property1RegistrationForm;




// ProfileForm.js
import React from 'react';
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addProfile, updateProfile, getUserAdditionalDetails } from '../../../services/operations/profile';
import { useDispatch, useSelector } from "react-redux";

const ProfileForm = () => {
  return (
    <div>
      <ProfileFormTemplate
        fields={data.profile.fields} // Access the profile fields directly from data.profile
        createFunction={addProfile}
        updateFunction={updateProfile}
        getData={getUserAdditionalDetails}
      />
    </div>
  );
};

export default ProfileForm;

