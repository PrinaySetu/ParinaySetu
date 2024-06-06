import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addProfile, updateProfile } from '../../../services/operations/profile';
import { useDispatch, useSelector } from "react-redux"
const ProfileForm = () => {
  return (
    <div>
       <ProfileFormTemplate
        fields={data.profile.fields} // Access the education fields directly from data.education
        createFunction={addProfile}
        updateFunction={updateProfile}
        />
    </div>
  )
}

export default ProfileForm
