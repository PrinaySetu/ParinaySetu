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
    <div style={styles.container}>
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <div key={profile._id} style={styles.card}>
            <img
              style={styles.profileImage}
              src={profile.image}
              alt={`${profile.firstName} ${profile.lastName}`}
            />
            <div style={styles.profileDetails}>
              <p style={styles.profileName}>{profile.firstName} {profile.lastName}</p>
              <p style={styles.profileGender}>{profile.additionalDetails.gender}</p>
              <p style={styles.profileAge}>{profile.additionalDetails.age} years old</p>
              <button
                style={styles.viewButton}
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
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#F5F5F5'
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    textAlign: 'center',
    padding: '20px',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  profileDetails: {
    textAlign: 'center',
  },
  profileName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '10px',
  },
  profileGender: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '5px',
  },
  profileAge: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '20px',
  },
  viewButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#FFF',
    backgroundColor: '#4169E1',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  viewButtonHover: {
    backgroundColor: '#3154b1',
  }
};

export default RecommendedProfiles;
