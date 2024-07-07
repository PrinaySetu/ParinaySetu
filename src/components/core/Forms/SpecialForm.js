import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addSpecial, updateSpecial, getUserSpecial } from '../../../services/operations/special';
import { useDispatch, useSelector } from "react-redux"
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

const SpecialForm = () => {
  return (
    <div className="w-full gap-[3rem] bg-white items-center flex flex-col text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <ProfileFormTemplate
        fields={data.special.fields} // Access the education fields directly from data.education
        createFunction={addSpecial}
        updateFunction={updateSpecial}
        getData={getUserSpecial}
      />
      <Footer />
    </div>
  )
}

export default SpecialForm
