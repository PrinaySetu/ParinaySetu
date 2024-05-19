import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
const Template = ({formtype}) => {
  return (
    <div>
      {
        formtype=== 'signup' ?(<SignupForm/>):(<LoginForm/>)
      }
    </div>
  )
}

export default Template
