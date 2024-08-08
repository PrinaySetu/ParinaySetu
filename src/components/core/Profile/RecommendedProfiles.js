import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showAllRecommendedProfiles } from '../../../services/operations/profile';
import Navbar from '../../Common/Navbar';

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

  return (<>
    <Navbar />
    <div className="flex  py-24 sm:py-32 flex-wrap justify-center gap-5 m-5">
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <div key={profile._id} className="bg-white rounded-lg shadow-lg overflow-hidden w-72 text-center p-5">
            <img
              className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
              src={profile.image}
              alt={`${profile.firstName} ${profile.lastName}`}
            />
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800 mb-2">{profile.firstName} {profile.lastName}</p>
              <p className="text-gray-600 mb-1">{profile.additionalDetails.gender}</p>
              <p className="text-gray-600 mb-5">{profile.additionalDetails.age} years old</p>
              <button
                className="py-2 px-4 text-white font-semibold bg-blue-600 rounded-md transition-colors duration-300 hover:bg-blue-700"
                onClick={() => handleViewDetails(profile._id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No recommended profiles found.</p>
      )}
    </div>
  </>);
};

export default RecommendedProfiles;
