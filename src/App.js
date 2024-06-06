import { useEffect } from "react"
import "./App.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"
import { getUserDetails } from "./services/operations/profile"
import Navbar from "./components/Common/Navbar"
import EducationForm from "./components/core/Forms/EducationForm"
import SpecialForm from "./components/core/Forms/SpecialForm"
import ProfileDetails from "./components/core/Profile/ProfileDetails"
import ProfileForm from "./components/core/Forms/ProfileForm"
import VerifyEmail from "./pages/VerifyEmail"
import OpenRoute from "./components/core/Auth/OpenRoute"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import AdminSignup from "./pages/AdminSignup"
import AdminLogin from "./pages/AdminLogin"
import Home from "./pages/Home"
import Error from "./pages/Error"
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
      path="adminlogin"
      element={
        <OpenRoute>
          <AdminLogin/>
        </OpenRoute>
      }
    />
     <Route
      path="adminsignup"
      element={
        <OpenRoute>
          <AdminSignup/>
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
        <Route
          path="/user"
          element={

          <PrivateRoute>
            <ProfileDetails/>
          </PrivateRoute>
          }
        />
        <Route
          path="/form"
          element={

          <PrivateRoute>
            <EducationForm/>
          </PrivateRoute>
          }
        />
         <Route
          path="/special"
          element={

          <PrivateRoute>
            <SpecialForm/>
          </PrivateRoute>
          }
        />
         <Route
          path="/profile"
          element={

          <PrivateRoute>
            <ProfileForm/>
          </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <Error/>
          } />
    </Routes>
  </div>
  );
}

export default App;
