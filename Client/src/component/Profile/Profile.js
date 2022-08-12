import React from 'react'
import './Profile.css'
import dummy from './dummypic.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../AuthContext'
import axios from '../axios'

const Profile = () => {
  const {user, updateUser, fetchUser} = useAuthContext();
  const navigate = useNavigate()
  const logout = () => {
    axios
    .post('logout')
    .then((response) => {
      updateUser({})
      navigate('/login');
    })
    .catch((error) => {
      console.log(error)
    });
  };
  return (
    <div className='profcontainer'>
      <div className='profsubcont'>
      <img src={dummy}  className='profpic'/><br/>
      <input type="text" name="name" defaultValue={user.firstName + " " + user.lastName} readOnly/>
      <input type="text" name="email" defaultValue={user.email} readOnly/>
      <input type="text" name="contact" defaultValue={user.contactNumber} readOnly/>
      <input type="text" name="role" defaultValue={user.role} readOnly/>
      {/* <i className="arrowl" onclick={collapse}></i> */}
      </div>
      {/* <Link to={"/"}>Dashboard</Link><br />
      <Link to={"/team-member"}>Team member</Link> <br />
      <Link to={"/apply-leave"}>Apply Leave</Link><br />
      <Link to={"/login"}>Login</Link> */}
      <div className='profsubcont end'>
      <Link to={"/profile"} className='profbtn'>Profile</Link>
      <Link to="" onClick={logout} className='profbtn'>Logout</Link><br/>
      </div>
    </div>
  )
}

export default Profile;
