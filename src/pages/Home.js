import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      This is Home Page 
      <button>
        <Link to="/signup">Signup</Link>
      </button>
      <button>
        <Link to="/login">login</Link>
      </button>
    </div>
  )
}

export default Home
