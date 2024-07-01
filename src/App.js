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
import FamilyForm from "./components/core/Forms/FamilyForm"
import ProfileDetails from "./components/core/Profile/ProfileDetails"
import ProfileForm from "./components/core/Forms/ProfileForm"
import ContactForm from "./components/core/Forms/ContactForm"
import DocumentUploader from "./components/core/Forms/DocumentForm"
import VerifyEmail from "./pages/VerifyEmail"
import OpenRoute from "./components/core/Auth/OpenRoute"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import AdminSignup from "./pages/AdminSignup"
import AdminLogin from "./pages/AdminLogin"
import Home from "./pages/Home"
import Error from "./pages/Error"
import WorkForm from "./components/core/Forms/WorkForm"
import FamileDetailsForm from "./components/core/Forms/FamileDetailsForm"
import FatherFamily from "./components/core/Forms/FatherFamily"
import MotherFamily from "./components/core/Forms/MotherFamily"
import FriendsForm from "./components/core/Forms/FriendsForm"
import PropertyForm from "./components/core/Forms/PropertyForm"
import RelativeForm from "./components/core/Forms/RelativeForm"
import UserDashboard from "./components/core/Dashboard/UserDashboard"
import MainUserDetails from "./components/core/Dashboard/UserDetails"
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
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Navbar />
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Navbar />
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="adminlogin"
          element={
            <OpenRoute>
              <AdminLogin />
            </OpenRoute>
          }
        />
        <Route
          path="adminsignup"
          element={
            <OpenRoute>
              <AdminSignup />
            </OpenRoute>
          }
        />
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route
          path="/user"
          element={

            <PrivateRoute>
              <ProfileDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/education"
          element={

            <PrivateRoute>
              <EducationForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/special"
          element={

            <PrivateRoute>
              <SpecialForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={

            <PrivateRoute>
              <ProfileForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/family-details"
          element={

            <PrivateRoute>
              <FamilyForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact-details"
          element={

            <PrivateRoute>
              <ContactForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/docs"
          element={

            <PrivateRoute>
              <DocumentUploader />
            </PrivateRoute>
          }/>
          <Route
            path="/work"
            element={

              <PrivateRoute>
                <WorkForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/family"
            element={

              <PrivateRoute>
                <FamileDetailsForm/>
              </PrivateRoute>
            }
          />
          <Route
            path="/father"
            element={

              <PrivateRoute>
                <FatherFamily/>
              </PrivateRoute>
            }
          />
          <Route
            path="/mother"
            element={

              <PrivateRoute>
                <MotherFamily/>
              </PrivateRoute>
            }
          />
          <Route
            path="/friends"
            element={

              <PrivateRoute>
                <FriendsForm/>
              </PrivateRoute>
            }
          />
          <Route
            path="/property"
            element={

              <PrivateRoute>
                <PropertyForm/>
              </PrivateRoute>
            }
          />
          <Route
            path="/relative"
            element={

              <PrivateRoute>
                <RelativeForm/>
              </PrivateRoute>
            }
          />
          <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <UserDashboard />
    </PrivateRoute>
  }
/>
<Route
    path="/user/:id"
    element={
      <PrivateRoute>
        <MainUserDetails />
      </PrivateRoute>
    }
  />
        <Route
          path="*"
          element={
            <Error />
          } />
      </Routes>
    </div>
  );
}

export default App;
