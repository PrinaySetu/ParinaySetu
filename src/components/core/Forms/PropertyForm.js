import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addProperty, updateProperty, getUserProperty } from '../../../services/operations/property'
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

const PropertyForm = () => {
  return (
    <div className="w-full gap-[3rem] bg-white items-center flex flex-col text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <ProfileFormTemplate
        fields={data.property.fields}
        createFunction={addProperty}
        updateFunction={updateProperty}
        getData={getUserProperty}
      />
      <Footer />
    </div>
  )
}

export default PropertyForm
