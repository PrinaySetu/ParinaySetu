import React from 'react'
import FatherFamilyForm from './FatherFamilyForm'
import { schema, addFatherFamily, updateFatherFamily, getUserFatherFamily } from '../../../services/operations/fatherFamily'
import data from '../../../data/data2.json'
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

const FatherFamily = () => {
  return (
    <div className="w-full relative bg-white text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <FatherFamilyForm
        createFunction={addFatherFamily} updateFunction={updateFatherFamily}
        getData={getUserFatherFamily} />
      <Footer />
    </div>
  )
}

export default FatherFamily
