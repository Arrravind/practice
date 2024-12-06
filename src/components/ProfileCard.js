import React from 'react'

function ProfileCard(props) {
  return (
    <div>
      <img src={props.img} alt='No img' ></img>
      <h2>Image Title : {props.name}</h2>
    </div>
  )
}

export default ProfileCard
