import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import{addRelative, updateRelative,getUserRelative} from '../../../services/operations/relative'
const RelativeForm = () => {
  return (
    <div>
      <ProfileFormTemplate
        fields={data.relatives.fields}
        createFunction={addRelative}
        updateFunction={updateRelative}
        getData={getUserRelative}
      />
    </div>
  )
}

export default RelativeForm
