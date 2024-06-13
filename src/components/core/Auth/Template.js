import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
const Template = ({ formtype }) => {
  return (
    <div className="container mx-auto">
      {
        formtype === 'signup' ? (<SignupForm />) : (<LoginForm />)
      }
    </div>
  )
}

export default Template
