import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addRelative, updateRelative, getUserRelative } from '../../../services/operations/relative'
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
const RelativeForm = () => {
  return (
    <div className="w-full relative bg-white text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <ProfileFormTemplate
        fields={data.relatives.fields}
        createFunction={addRelative}
        updateFunction={updateRelative}
        getData={getUserRelative}
      />
      <Footer />
    </div>
  )
}

export default RelativeForm
