import React from 'react'
import MotherFamilyForm from './MotherFamilyForm'
import { addMotherFamily, updateMotherFamily, getUserMotherFamily } from '../../../services/operations/motherFamily'
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
const MotherFamily = () => {
  return (
    <div className="w-full gap-[3rem] bg-white items-center flex flex-col text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <MotherFamilyForm
        createFunction={addMotherFamily}
        updateFunction={updateMotherFamily}
        getData={getUserMotherFamily}
      />
      <Footer />
    </div>
  )
}

export default MotherFamily
