import { useEffect } from "react";
import "./App.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
// React Router
import { Route, Routes, useNavigate } from "react-router-dom";
import { getUserDetails } from "./services/operations/profile";
import Navbar from "./components/Common/Navbar";
import EducationForm from "./components/core/Forms/EducationForm";
import SpecialForm from "./components/core/Forms/SpecialForm";
import ProfileDetails from "./components/core/Profile/ProfileDetails";
import ProfileForm from "./components/core/Forms/ProfileForm";
import ContactForm from "./components/core/Forms/ContactForm";
import DocumentUploader from "./components/core/Forms/DocumentForm";
import VerifyEmail from "./pages/VerifyEmail";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminSignup from "./pages/AdminSignup";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import Error from "./pages/Error";
import WorkForm from "./components/core/Forms/WorkForm";
import FamileDetailsForm from "./components/core/Forms/FamileDetailsForm";
import FatherFamily from "./components/core/Forms/FatherFamily";
import MotherFamily from "./components/core/Forms/MotherFamily";
import FriendsForm from "./components/core/Forms/FriendsForm";
import PropertyForm from "./components/core/Forms/PropertyForm";
import RelativeForm from "./components/core/Forms/RelativeForm";
import UserDashboard from "./components/core/Dashboard/UserDashboard";
import MainUserDetails from "./components/core/Dashboard/UserDetails";
import RecommendedProfiles from "./components/core/Profile/RecommendedProfiles";
import SingleRecommendedProfile from "./components/core/Profile/SingleRecommendedProfile";
import ContactPage from "./components/Common/ContactPage";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import ChangePassword from "./components/core/Auth/UpdatePassword";
import SubscriptionComponent from "./components/core/susbscription";
import Photos from "./components/core/Profile/photos";
import TermsAndConditions from "./components/Common/Terms"
import AdminROute from "./components/core/Auth/AdminRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShoppingAndDelivery from "./pages/ShoppingandDelievery";


function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token")
      if (token) {
        // Parse the token (it's a JWT)
        const tokenPayload = JSON.parse(atob(token.split('.')[1]))
        const expirationTime = tokenPayload.exp * 1000 // Convert to milliseconds

        if (Date.now() >= expirationTime) {
          // Token has expired
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          navigate("/login")
        } else {
          // Token is still valid
          dispatch(getUserDetails(JSON.parse(token), navigate))
        }
      }
    }

    checkToken()
  }, [dispatch, navigate])

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      {/* <Navbar /> */}
      <Routes>
        {/* signup */}
        <Route
          path="sub"
          element={
            <SubscriptionComponent />}
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              {/* <Navbar /> */}
              <Signup />
            </OpenRoute>
          }
        />
        {/* Login page */}
        <Route
          path="login"
          element={
            <OpenRoute>
              {/* <Navbar /> */}
              <Login />
            </OpenRoute>
          }
        />
        {/* admin login page */}
        <Route
          path="adminlogin"
          element={
            <OpenRoute>
              <AdminLogin />
            </OpenRoute>
          }
        />
        {/* admin signup page */}
        <Route
          path="adminsignup"
          element={
            <OpenRoute>
              <AdminSignup />
            </OpenRoute>
          }
        />
        {/* Home page */}
        <Route
          path="/"
          element={<>
            <Navbar />
            <Home />
          </>
          }
        />
        {/* OTP page */}
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        {/* User profile page */}
        <Route
          path="/my-dashboard"
          element={

            <PrivateRoute>
              <ProfileDetails />
            </PrivateRoute>
          }
        />
        {/* Education form */}
        <Route
          path="/education"
          element={

            <PrivateRoute>
              <EducationForm />
            </PrivateRoute>
          }
        />
        {/* Special Form */}
        <Route
          path="/special"
          element={

            <PrivateRoute>
              <SpecialForm />
            </PrivateRoute>
          }
        />
        {/* Profile Form  */}
        <Route
          path="/profile"
          element={

            <PrivateRoute>
              <ProfileForm />
            </PrivateRoute>
          }
        />
        {/* family details form  */}
        <Route
          path="/contact-details"
          element={

            <PrivateRoute>
              <ContactForm />
            </PrivateRoute>
          }
        />
        {/* contact details form */}
        <Route
          path="/docs"
          element={

            <PrivateRoute>
              <DocumentUploader />
            </PrivateRoute>
          } />
        <Route
          path="/work"
          element={

            <PrivateRoute>
              <WorkForm />
            </PrivateRoute>
          }
        />
        {/* document form  */}
        <Route
          path="/family"
          element={

            <PrivateRoute>
              <FamileDetailsForm />
            </PrivateRoute>
          } />
        {/* work form  */}
        <Route
          path="/work"
          element={

            <PrivateRoute>
              <WorkForm />
            </PrivateRoute>
          }
        />
        {/* family form */}
        <Route
          path="/family"
          element={

            <PrivateRoute>
              <FamileDetailsForm />
            </PrivateRoute>
          }
        />
        {/* father form  */}
        <Route
          path="/father"
          element={

            <PrivateRoute>
              <FatherFamily />
            </PrivateRoute>
          }
        />
        {/* mother form  */}
        <Route
          path="/mother"
          element={

            <PrivateRoute>
              <MotherFamily />
            </PrivateRoute>
          }
        />
        {/* friends form */}
        <Route
          path="/friends"
          element={

            <PrivateRoute>
              <FriendsForm />
            </PrivateRoute>
          }
        />
        {/* property form */}
        <Route
          path="/property"
          element={

            <PrivateRoute>
              <PropertyForm />
            </PrivateRoute>
          }
        />
        {/* relatives form */}
        <Route
          path="/relative"
          element={

            <PrivateRoute>
              <RelativeForm />
            </PrivateRoute>
          }
        />
        {/* dashboard where we see all users */}
        <Route
          path="/dashboard"
          element={
            <AdminROute>
              <UserDashboard />
            </AdminROute>
          }
        />
        {/* single user from dashboard */}
        <Route
          path="/user/:id"
          element={
            <AdminROute>
              <MainUserDetails />
            </AdminROute>
          }
        />
        {/* All recommended Profiles */}
        <Route
          path="/rec"
          element={
            <PrivateRoute>
              <RecommendedProfiles />
            </PrivateRoute>
          }
        />
        {/* Single recommended profile */}
        <Route
          path="/profile/:id"
          element={
            <AdminROute>
              <SingleRecommendedProfile />
            </AdminROute>
          }
        />


        {/* Contact page */}
        <Route
          path="/terms"
          element={
            <TermsAndConditions />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage />
          }
        />
        {/* Forget password page */}
        <Route
          path="/forgetpassword"
          element={
            <ForgetPassword />
          }
        />
        {/* Update password page */}
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        {/* Change password page */}
        <Route
          path="change-password"
          element={
            <AdminROute>
              <ChangePassword />
            </AdminROute>
          }
        />


        {/* All other pages */}
        <Route
          path="*"
          element={
            <Error />
          } />

        {
          <Route
            path="Documents"
            element={
              <Photos />
            } />

        }{
          <Route
            path="privacy-policy"
            element={
              <PrivacyPolicy />
            } />

        }{
          <Route
            path="refund-policy"
            element={
              <RefundPolicy />
            } />

        }{
          <Route
            path="shopping-and-delivery"
            element={
              <ShoppingAndDelivery />
            } />  }
      </Routes>
    </div>
  );
}

export default App;
