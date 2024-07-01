import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addFriend, updateFriend, getUserFriends } from '../../../services/operations/friends';
const FriendsForm = () => {
  return (
    <div>
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
