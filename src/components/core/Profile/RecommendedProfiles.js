import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showAllRecommendedProfiles } from '../../../services/operations/profile';


const RecommendedProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchProfiles = async () => {
      if (token) {
        try {
          setLoading(true);
          const result = await showAllRecommendedProfiles(token);
          if (result) {
            setProfiles(result);
          } else {
            setError('Failed to fetch profiles');
          }
        } catch (err) {
          setError('An error occurred while fetching profiles');
        } finally {
          setLoading(false);
        }
      } else {
        navigate('/login');
      }
    };

    fetchProfiles();
  }, [token, navigate]);

  const handleViewDetails = useCallback((profileId) => {
    navigate(`/profile/${profileId}`);
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <div key={profile._id}>
            <p>{profile.firstName} {profile.lastName}</p>
            <p>{profile.email}</p>
            <p>{profile.additionalDetails.gender}</p>
            {/* <p>{profile.additionalDetails.color}</p> */}
            <img 
            className='w-20 h-20 rounded-full object-cover'
            src={profile.image} alt="profile" />
            <button onClick={() => handleViewDetails(profile._id)}>View Details</button>
          </div>
        ))
      ) : (
        <p>No recommended profiles found.</p>
      )}
    </div>
  );
};

export default RecommendedProfiles;
