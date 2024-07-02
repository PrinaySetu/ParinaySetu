import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addWorking, updateWorking, getUserWorking } from '../../../services/operations/working';
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';

const WorkForm = () => {
  return (
    <div className="w-full relative bg-white text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <ProfileFormTemplate
        fields={data.working.fields}
        createFunction={addWorking}
        updateFunction={updateWorking}
        getData={getUserWorking}
      />
    </div>
  )
}

export default WorkForm
