import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addSpecial, updateSpecial } from '../../../services/operations/special';
import { useDispatch, useSelector } from "react-redux"

const SpecialForm = () => {
  return (
    <div>
      <ProfileFormTemplate
        fields={data.special.fields} // Access the education fields directly from data.education
        createFunction={addSpecial}
        updateFunction={updateSpecial}
      />
    </div>
  )
}

export default SpecialForm
