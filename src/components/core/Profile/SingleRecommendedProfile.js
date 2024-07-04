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
    <div style={styles.container}>
      {profile ? (
        <div style={styles.profileCard}>
          <h2 style={styles.profileName}>{profile.firstName} {profile.lastName}</h2>
          <img
            style={styles.profileImage}
            src={profile.image}
            alt={`${profile.firstName} ${profile.lastName}`}
          />
          <div style={styles.profileDetails}>
            <p style={styles.detailItem}><strong>Email:</strong> {profile.email}</p>
            <p style={styles.detailItem}><strong>Gender:</strong> {profile.additionalDetails.gender}</p>
            <p style={styles.detailItem}><strong>Age:</strong> {profile.additionalDetails.age}</p>
            {/* Add more fields as needed */}
          </div>
        </div>
      ) : (
        <p>No profile found.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#F5F5F5',
  },
  profileCard: {
    backgroundColor: '#FFF',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  profileName: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
  },
  profileDetails: {
    textAlign: 'left',
  },
  detailItem: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '10px',
  },
};

export default SingleRecommendedProfile;
