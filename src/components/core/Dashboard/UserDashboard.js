import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../services/operations/dashboard';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { dashboard, loading } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    // const token = localStorage.getItem('token');
    if (token) {
      dispatch(getAllUsers(token));
    }
  }, [dispatch, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All Users</h1>
      {dashboard && Array.isArray(dashboard) && dashboard.map((user) => (
        <div key={user._id}>
          {/* <p>Name: {user.name}</p> */}
          <p>Email: {user.email}</p>
          <Link to={`/user/${user._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;