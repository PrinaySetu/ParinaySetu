import React from 'react';
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { createEducation, updateEducation, getUserEducation } from '../../../services/operations/education';
import { useDispatch, useSelector } from "react-redux"
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

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
      <Footer />
    </div>
  );
};

export default EducationForm;
