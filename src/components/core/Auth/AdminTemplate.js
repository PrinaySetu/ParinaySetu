import React from 'react'
import AdminLoginForm from './AdminLoginForm'
import AdminSignupForm from './AdminSignupForm'
const AdminTemplate = ({formtype}) => {
    return (
      <div>
        {
          formtype=== 'signup' ?(<AdminSignupForm/>):(<AdminLoginForm/>)
        }
      </div>
  )
}

export default AdminTemplate
