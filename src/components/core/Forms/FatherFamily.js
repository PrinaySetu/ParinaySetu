import React from 'react'
import FatherFamilyForm from './FatherFamilyForm'
import {schema,addFatherFamily,updateFatherFamily,getUserFatherFamily} from '../../../services/operations/fatherFamily'
import data from '../../../data/data2.json'
const FatherFamily = () => {
  return (
    <div>
      <FatherFamilyForm 
      createFunction={addFatherFamily} updateFunction={updateFatherFamily} 
      getData={getUserFatherFamily}/>
    </div>
  )
}

export default FatherFamily
