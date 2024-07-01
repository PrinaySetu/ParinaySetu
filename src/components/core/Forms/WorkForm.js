import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addWorking, updateWorking, getUserWorking } from '../../../services/operations/working';
const WorkForm = () => {
  return (
    <div>
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
