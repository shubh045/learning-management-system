import React from 'react'
import './Changepwd.css'
import { useNavigate } from 'react-router-dom'
export default function Changepwd() {
	const navigate = useNavigate()
		
	const Message = () => {
		alert("Password Changed Successfully.")
	}
  return (
    <div className="mainflex">
		<h2>Change Password</h2>
	    	<form className="change" method="post" action="">
				<div className='changeflex'>
				<label htmlFor="cpwd">Current Password: </label>
	    		<input type="password" name="cpassword" placeholder="current password" id="cpwd" />
				</div>
				<div className='changeflex'>
				<label htmlFor="npwd">New Password: </label>
	    		<input type="password" name="npassword" placeholder="new password" id="npwd" />
				</div>
				<div className='changeflex'>
				<label htmlFor="nnpwd">Confirm New Password: </label>
	    		<input type="password" name="nnpassword" placeholder="confirm new password" id="nnpwd" />
				</div>
				<div className='changeflex'>
				<button type="button" id="save" onClick={() => Message()}>Save</button>
	    		<button id="cancel" onClick={() => navigate("/profile")}>Cancel</button>
				</div>
	        </form>
	  </div>
  )
}
