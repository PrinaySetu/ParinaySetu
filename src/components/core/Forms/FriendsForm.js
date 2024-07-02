import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addFriend, updateFriend, getUserFriends } from '../../../services/operations/friends';
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
const FriendsForm = () => {
  return (
    <div className="w-full relative bg-white text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <ProfileFormTemplate
        fields={data.friends.fields}
        createFunction={addFriend}
        updateFunction={updateFriend}
        getData={getUserFriends}
      />
    </div>
  )
}

export default FriendsForm
