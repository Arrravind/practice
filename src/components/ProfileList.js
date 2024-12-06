import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';

function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => setProfiles(response.data));
  }, []);

  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} name={profile.title} img={profile.url}/>
        ))}    
    </div>
  )
}

export default ProfileList
