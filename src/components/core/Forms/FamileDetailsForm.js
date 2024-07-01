import React from 'react'
import ArrayFormTemplate from './ArrayFormTemplate'
import data from '../../../data/data2.json'
import { addFamilyDetails,updateFamilyDetails,getUserFamilyDetails } from '../../../services/operations/familyDetails'
const FamileDetailsForm = () => {
  return (
    <div>
      <ArrayFormTemplate
        fields={data.familyDetails.fields}
        createFunction={addFamilyDetails}
        updateFunction={updateFamilyDetails}
        getData={getUserFamilyDetails}
      />
    </div>
  )
}

export default FamileDetailsForm
