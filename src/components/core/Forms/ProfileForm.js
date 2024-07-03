import React, { useState } from 'react';
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json';
import { addProfile, updateProfile, getUserAdditionalDetails, uploadProfilePicture } from '../../../services/operations/profile';
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const ProfileForm = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const token = useSelector(state => state.auth.token);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      console.log("Profile Picture selected:", file.name);
    }
  };

  const handleProfilePictureUpload = async () => {
    if (profilePicture) {
      const formData = new FormData();
      formData.append("profilePicture", profilePicture);
      console.log("FormData:", formData.get("profilePicture"))
      // Log FormData contents (for debugging)
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      try {
        const result = await uploadProfilePicture(formData, token);
        if (result) {
          toast.success("Profile picture uploaded successfully");
        }
      } catch (error) {
        console.error("Upload error:", error);
        toast.error("Failed to upload profile picture");
      }
    } else {
      toast.error("Please select a profile picture to upload");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleProfilePictureChange} accept="image/*" />
      <button onClick={handleProfilePictureUpload}>Upload Profile Picture</button>

      <ProfileFormTemplate
        fields={data.profile.fields}
        createFunction={addProfile}
        updateFunction={updateProfile}
        getData={getUserAdditionalDetails}
      />
    </div>
  );
};

export default ProfileForm;