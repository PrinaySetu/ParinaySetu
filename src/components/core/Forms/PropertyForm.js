import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import {addProperty, updateProperty,getUserProperty}from '../../../services/operations/property'
const PropertyForm = () => {
  return (
    <div>
      <ProfileFormTemplate
        fields={data.property.fields}
        createFunction={addProperty}
        updateFunction={updateProperty}
        getData={getUserProperty}
      />
    </div>
  )
}

export default PropertyForm
