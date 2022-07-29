import React from 'react'
import './Profile.css'
import dummy from './dummypic.jpg'

const Profile = () => {
  const collapse=()=>{
    // document.querySelector()
  }
  return (
    <div className='profcontainer'>
      <div className='profsubcont'>
      <img src={dummy}  className='profpic'/><br/>
      <i className="arrowl" onclick={collapse}></i>
      </div>
      <div className='profsubcont end'>
      <button className='profbtn'>Profile</button><br/>
      <button className='profbtn'>Logout</button><br/>
      </div>
    </div>
  )
}

export default Profile
