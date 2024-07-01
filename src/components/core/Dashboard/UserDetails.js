import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMainUser } from '../../../services/operations/dashboard';

const MainUserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { mainUserDashboard, loading } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && id) {
      dispatch(getMainUser(token, id));
    }
  }, [dispatch, token, id]);

  // useEffect(() => {
  //   console.log("Dashboard state:", mainUserDashboard);
  // }, [mainUserDashboard]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!mainUserDashboard || typeof mainUserDashboard !== 'object') {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>First Name: {mainUserDashboard.firstName}</p>
      <p>Last Name: {mainUserDashboard.lastName}</p>
      <p>Email: {mainUserDashboard.email}</p>
      <p>Father's Name: {mainUserDashboard.additionalDetails?.fatherName}</p>
      <p>Mother's Name: {mainUserDashboard.additionalDetails?.motherName}</p>
      <p>Guardian Name: {mainUserDashboard.additionalDetails?.guardianName}</p>
      <p>Guardian Relation: {mainUserDashboard.additionalDetails?.guardianRelation}</p>
      <p>User Type: {mainUserDashboard.userType}</p>
      <p>Account Created: {new Date(mainUserDashboard.date).toLocaleString()}</p>
    </div>
  );
};

export default MainUserDetails;