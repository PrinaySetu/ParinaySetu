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
    return <div className='text-5xl text-[#333]'>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center bg-[#FFEB99] p-5 rounded-lg shadow-lg'>
      <button className='self-start bg-red text-white rounded-lg px-4 py-2 mb-5 cursor-pointer' onClick={handleBack}>
        Back
      </button>
      <h1 className='text-4xl text-red mb-500'>All Users</h1>
      {dashboard && Array.isArray(dashboard) && dashboard.map((user) => (
        <div key={user._id} className='bg-white rounded-lg shadow-lg p-5 mb-5 w-full max-w-xs max-[350px]:max-w-[250px] sm:max-w-xl'>
          <p className='text-base text-[#333] mb-2'><strong>Name:</strong> {user.name}</p>
          <p className='text-base text-[#333] mb-2'><strong>Email:</strong> {user.email}</p>
          <Link to={`/user/${user._id}`} className='text-base text-red font-bold no-underline'>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
