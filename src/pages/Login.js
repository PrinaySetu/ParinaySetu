import React from 'react'
import Template from '../components/core/Auth/Template'
import Navbar from '../components/Common/Navbar'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <Template
        formtype='login'
      />
    </div>
  )
}

export default Login
