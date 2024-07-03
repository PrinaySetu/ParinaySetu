import React from 'react'
import MotherFamilyForm from './MotherFamilyForm'
import { addMotherFamily, updateMotherFamily, getUserMotherFamily } from '../../../services/operations/motherFamily'
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
const MotherFamily = () => {
  return (
    <div className="w-full relative bg-white text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <MotherFamilyForm
        createFunction={addMotherFamily}
        updateFunction={updateMotherFamily}
        getData={getUserMotherFamily}
      />
    </div>
  )
}

export default MotherFamily
