import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getMainUser, getAllOtherUsers } from '../../../services/operations/dashboard';
import { addRecommendedProfile, updateRecommendedProfiles } from '../../../services/operations/profile';
import { toast } from 'react-hot-toast';

const MainUserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleBack = () => {
    navigate(-1);
  };
  const handleViewDetails = useCallback((profileId) => {
    navigate(`/profile/${profileId}`);
  }, [navigate]);
  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (!mainUserDashboard || typeof mainUserDashboard !== 'object') {
    return <div style={styles.error}>User not found</div>;
  }

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={handleBack}>
        Go Back
      </button>
      <h1 style={styles.heading}>User Details</h1>
      <div style={styles.userDetails}>
        <img src={mainUserDashboard.image} alt={mainUserDashboard.firstName} className='w-24 h-24 rounded-full object-cover mr-4' />
        <p style={styles.detail}><strong>First Name:</strong> {mainUserDashboard.firstName}</p>
        <p style={styles.detail}><strong>Last Name:</strong> {mainUserDashboard.lastName}</p>
        <p style={styles.detail}><strong>Email:</strong> {mainUserDashboard.email}</p>
        <p style={styles.detail}><strong>Age:</strong> {mainUserDashboard.additionalDetails?.Age}</p>
        <p style={styles.detail}><strong>Father's Name:</strong> {mainUserDashboard.additionalDetails?.fatherName}</p>
        <p style={styles.detail}><strong>Mother's Name:</strong> {mainUserDashboard.additionalDetails?.motherName}</p>
        <p style={styles.detail}><strong>Guardian Name:</strong> {mainUserDashboard.additionalDetails?.guardianName}</p>
        <p style={styles.detail}><strong>Guardian Relation:</strong> {mainUserDashboard.additionalDetails?.guardianRelation}</p>
        <p style={styles.detail}><strong>User Type:</strong> {mainUserDashboard.userType}</p>
        <p style={styles.detail}><strong>User ID:</strong> {mainUserDashboard._id}</p>
        <p style={styles.detail}><strong>Account Created:</strong> {new Date(mainUserDashboard.date).toLocaleString()}</p>
        <button className="py-2 px-4 text-white font-semibold bg-blue-600 rounded-md transition-colors duration-300 hover:bg-blue-700"
          onClick={() => handleViewDetails(mainUserDashboard._id)}
        >
          View Full Details
        </button>
      </div>

      <h2 style={styles.subHeading}>Other Users</h2>
      {users && users.length > 0 ? (
        <ul style={styles.userList}>
          {users.map((user) => (
            <li key={user._id} style={styles.userCard}>
              <img src={user.image} alt={user.firstName} className='w-24 h-24 rounded-full object-cover mr-4' />
              <p style={styles.detail}><strong>First Name:</strong> {user.firstName}</p>
              <p style={styles.detail}><strong>Last Name:</strong> {user.lastName}</p>
              <p style={styles.detail}><strong>Email:</strong> {user.email}</p>
              <p style={styles.detail}><strong>User Type:</strong> {user.userType}</p>
              <p style={styles.detail}><strong>User ID:</strong> {user._id}</p>
              <p style={styles.detail}><strong>Account Created:</strong> {new Date(user.date).toLocaleString()}</p>
              <button className="py-2 px-4 text-white font-semibold bg-blue-600 rounded-md transition-colors duration-300 hover:bg-blue-700"
                onClick={() => handleViewDetails(user._id)}
              >
                View Full Details
              </button>
              <input
                type="checkbox"
                checked={selectedProfiles.includes(user._id)}
                onChange={() => handleProfileSelect(user._id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.noUsers}>No other users found</p>
      )}
      {selectedProfiles.length === 0 ? (
        <button style={styles.button} onClick={handleAddRecommendedProfiles} disabled={selectedProfiles.length === 0}>
          Add Recommended Profiles
        </button>
      ) : (
        <button style={styles.button} onClick={handleUpdateRecommendedProfiles} disabled={selectedProfiles.length === 0}>
          Update Recommended Profiles
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFEB99',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#FF0000',
    color: '#FFF',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '2rem',
    color: '#FF0000',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.5rem',
    color: '#333',
    marginTop: '30px',
    marginBottom: '20px',
  },
  userDetails: {
    width: '100%',
    maxWidth: '600px',
    textAlign: 'left',
    marginBottom: '30px',
  },
  detail: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '10px',
  },
  userList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
    maxWidth: '600px',
  },
  userCard: {
    backgroundColor: '#FFF',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
  },
  noUsers: {
    fontSize: '1rem',
    color: '#333',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#FF0000',
    color: '#FFF',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  loading: {
    fontSize: '1.5rem',
    color: '#333',
  },
  error: {
    fontSize: '1.5rem',
    color: '#FF0000',
  },
};

export default MainUserDetails;
