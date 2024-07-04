import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../services/operations/dashboard';
import { Link, useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dashboard, loading } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getAllUsers(token));
    }
  }, [dispatch, token]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={handleBack}>
        Back
      </button>
      <h1 style={styles.heading}>All Users</h1>
      {dashboard && Array.isArray(dashboard) && dashboard.map((user) => (
        <div key={user._id} style={styles.userCard}>
          <p style={styles.detail}><strong>Name:</strong> {user.name}</p>
          <p style={styles.detail}><strong>Email:</strong> {user.email}</p>
          <Link to={`/user/${user._id}`} style={styles.link}>View Details</Link>
        </div>
      ))}
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
  userCard: {
    backgroundColor: '#FFF',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '600px',
  },
  detail: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '10px',
  },
  link: {
    fontSize: '1rem',
    color: '#FF0000',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  loading: {
    fontSize: '1.5rem',
    color: '#333',
  },
};

export default UserDashboard;
