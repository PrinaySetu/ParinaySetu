import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../../services/operations/profile'; // Adjust the import path as necessary

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token); // Assuming you store the token in the auth state
  const user = useSelector((state) => state.profile.user);
  const loading = useSelector((state) => state.profile.loading);

  useEffect(() => {
    if (token) {
      dispatch(getUserDetails(token));
    } else {
      navigate('/login'); // Navigate to login if token is not available
    }
  }, [dispatch, token, navigate]);

  const renderField = (label, value) => (
    <div key={label}>
      <strong>{label}:</strong> {value || 'N/A'}
    </div>
  );

  const renderProfileDetails = (profile) => {
    if (!profile) return null;
    return (
      <>
        {renderField('Birth Date', profile.birthDate)}
        {renderField('Birth Place', profile.birthPlace)}
        {renderField('Birth Time', profile.birthTime)}
        {renderField('Blood Group', profile.bloodGroup)}
        {renderField('Caste', profile.caste)}
        {renderField('Color', profile.color)}
        {renderField('Education', profile.education)}
        {renderField('Father Name', profile.fatherName)}
        {renderField('Feast', profile.feast)}
        {renderField('Gender', profile.gender)}
        {renderField('Gotra', profile.gotra)}
        {renderField('Gotra Mama', profile.gotraMama)}
        {renderField('Guardian Name', profile.guardianName)}
        {renderField('Guardian Relation', profile.guardianRelation)}
        {renderField('Height', profile.height)}
        {renderField('Identity Mark', profile.identityMark)}
        {renderField('Manglik Status', profile.manglikStatus ? 'Yes' : 'No')}
        {renderField('Marital Status', profile.maritalStatus)}
        {renderField('Mother Name', profile.motherName)}
        {renderField('Previous Disease', profile.previousDisease)}
        {renderField('Religion', profile.religion)}
        {renderField('Residence Type', profile.residenceType)}
        {renderField('Upcaste', profile.upcaste)}
        {renderField('Weight', profile.weight)}
      </>
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Profile Details</h1>
      {user ? (
        <>
          {renderField('First Name', user.firstName)}
          {renderField('Last Name', user.lastName)}
          {renderField('Email', user.email)}
          {renderProfileDetails(user.additionalDetails)}
        </>
      ) : (
        <p>No user details available</p>
      )}
    </div>
  );
};

export default ProfileDetails;
