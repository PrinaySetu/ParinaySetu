import React from 'react';
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { createEducation, updateEducation } from '../../../services/operations/education';
import { useDispatch, useSelector } from "react-redux"

const EducationForm = () => {

  return (
    <div>
      <ProfileFormTemplate
        fields={data.education.fields} // Access the education fields directly from data.education
        createFunction={createEducation}
        updateFunction={updateEducation}
      />
    </div>
  );
};

export default EducationForm;
