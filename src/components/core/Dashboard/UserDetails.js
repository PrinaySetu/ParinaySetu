import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMainUser, getAllOtherUsers } from '../../../services/operations/dashboard';
import { addRecommendedProfile, updateRecommendedProfiles } from '../../../services/operations/profile';
import { toast } from 'react-hot-toast';

const MainUserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { mainUserDashboard, users, loading } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  useEffect(() => {
    if (token && id) {
      dispatch(getMainUser(token, id));
      dispatch(getAllOtherUsers(token, id));
    }
  }, [dispatch, token, id]);

  useEffect(() => {
    if (mainUserDashboard && mainUserDashboard.additionalDetails) {
      setSelectedProfiles(mainUserDashboard.additionalDetails.recommendedProfiles || []);
    }
  }, [mainUserDashboard]);

  const handleProfileSelect = (profileId) => {
    setSelectedProfiles((prevSelected) =>
      prevSelected.includes(profileId)
        ? prevSelected.filter((id) => id !== profileId)
        : [...prevSelected, profileId]
    );
  };

  const handleAddRecommendedProfiles = async () => {
    if (selectedProfiles.length === 0) {
      toast.error("No profiles selected");
      return;
    }

    const data = {
      id,
      recommendedProfileIds: selectedProfiles,
    };
    console.log("Request Data:", data);
    
    try {
      const result = await addRecommendedProfile(data, token);
      console.log("API Result:", result);
      
      if (result) {
        setSelectedProfiles([]);
        dispatch(getMainUser(token, id));
      }
    } catch (error) {
      console.error("Error adding recommended profiles:", error);
      toast.error("Failed to add recommended profiles");
    }
  };

  const handleUpdateRecommendedProfiles = async () => {
    const data = {
      id,
      recommendedProfileIds: selectedProfiles,
    };
    console.log("Request Data:", data);

    try {
      const result = await updateRecommendedProfiles(data, token);
      console.log("API Result:", result);

      if (result) {
        dispatch(getMainUser(token, id));
        toast.success("Recommended profiles updated successfully");
      }
    } catch (error) {
      console.error("Error updating recommended profiles:", error);
      toast.error("Failed to update recommended profiles");
    }
  };

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
      <p>User id : {mainUserDashboard._id}</p>
      <p>Account Created: {new Date(mainUserDashboard.date).toLocaleString()}</p>

      <h2>Other Users</h2>
      {users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
              <p>Email: {user.email}</p>
              <p>User Type: {user.userType}</p>
              <p>User id: {user._id}</p>
              <p>Account Created: {new Date(user.date).toLocaleString()}</p>
              <input
                type="checkbox"
                checked={selectedProfiles.includes(user._id)}
                onChange={() => handleProfileSelect(user._id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No other users found</p>
      )}
      {selectedProfiles.length === 0 ? (
        <button onClick={handleAddRecommendedProfiles} disabled={selectedProfiles.length === 0}>
          Add Recommended Profiles
        </button>
      ) : (
        <button onClick={handleUpdateRecommendedProfiles} disabled={selectedProfiles.length === 0}>
          Update Recommended Profiles
        </button>
      )}
    </div>
  );
};

export default MainUserDetails;
