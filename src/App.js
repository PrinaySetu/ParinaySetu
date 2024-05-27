import { useEffect } from "react"
import "./App.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"
import { getUserDetails } from "./services/operations/profile"
import Navbar from "./components/Common/Navbar"

import VerifyEmail from "./pages/VerifyEmail"
import OpenRoute from "./components/core/Auth/OpenRoute"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
  <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
  <Navbar/>
    <Routes>
    <Route
      path="signup"
      element={
        <OpenRoute>
          <Signup/>
        </OpenRoute>
      }
    />
     <Route
      path="login"
      element={
        <OpenRoute>
          <Login/>
        </OpenRoute>
      }
    />
     <Route
      path="/"
      element={
        <Home/>
      }
    />
     <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail/>
            </OpenRoute>
          }
        />  
    </Routes>
  </div>
  );
}

export default App;
