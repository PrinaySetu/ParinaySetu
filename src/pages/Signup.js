import React from 'react'
import Template from '../components/core/Auth/Template'
import Navbar from '../components/Common/Navbar'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cornsilk">
      <Navbar />
      <Template formtype='signup' />
    </div>
  )
}

export default Signup
