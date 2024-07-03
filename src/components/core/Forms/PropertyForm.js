import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addProperty, updateProperty, getUserProperty } from '../../../services/operations/property'
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';

const PropertyForm = () => {
  return (
    <div className="w-full relative bg-white text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
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
