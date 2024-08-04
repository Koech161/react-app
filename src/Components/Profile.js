import React from 'react'
import "./Profile.css"
import Profile_icon from '../Assets/career-readiness.jpg'
const Profile = () => {
  return (
    <div className='upc'>
      <div className='gradiant'>
        <div className='profile-down'>
            <img src={Profile_icon} alt=''/>
            <div className='title'>Kamal Haris</div>
            <div className='description'>To build on what you've learned over the course of this section, we'll be building out a simple task list app to practice working with state and events, focusing in particular on working with arrays.

</div>
            <div className='profile-button'><a href='mailto:koechabel@gmail.com'>Contact Me</a></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
