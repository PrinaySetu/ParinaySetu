import React from 'react'
import MotherFamilyForm from './MotherFamilyForm'
import { addMotherFamily, updateMotherFamily, getUserMotherFamily } from '../../../services/operations/motherFamily'
const MotherFamily = () => {
  return (
    <div>
      <MotherFamilyForm
      createFunction={addMotherFamily}
        updateFunction={updateMotherFamily}
        getData={getUserMotherFamily}
       />
    </div>
  )
}

export default MotherFamily
