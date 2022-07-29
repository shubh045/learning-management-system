import React from 'react'
import './Profile.css'
import dummy from './dummypic.jpg'
import { Link } from 'react-router-dom'

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
      <Link to={"/"}>Dashboard</Link><br />
      <Link to={"/team-member"}>Team member</Link> <br />
      <Link to={"/apply-leave"}>Apply Leave</Link><br />
      <Link to={"/login"}>Login</Link>
      <div className='profsubcont end'>
      <button className='profbtn'>Profile</button><br/>
      <button className='profbtn'>Logout</button><br/>
      </div>
    </div>
  )
}

export default Profile;
