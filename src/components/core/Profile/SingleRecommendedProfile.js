import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSingleRecommendedProfile } from '../../../services/operations/profile';


const SingleRecommendedProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams(); // Get profile ID from URL parameters
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          setLoading(true);
          const data = { id };
          const result = await getSingleRecommendedProfile(token, data);
          if (result) {
            setProfile(result);
          } else {
            setError('Failed to fetch profile details');
          }
        } catch (err) {
          setError('An error occurred while fetching profile details');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProfile();
  }, [token, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {profile ? (
        <div>
          <h3>Profile Details</h3>
          <p>{profile.firstName} {profile.lastName}</p>
          <p>{profile.email}</p>
          <p>{profile.additionalDetails.gender}</p>
          <img 
            className='w-20 h-20 rounded-full object-cover'
            src={profile.image} alt="profile" />
          {/* Render additional details */}
        </div>
      ) : (
        <p>No profile found.</p>
      )}
    </div>
  );
};

export default SingleRecommendedProfile;
