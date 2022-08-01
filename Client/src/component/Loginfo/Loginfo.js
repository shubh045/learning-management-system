import React from 'react'
import './Loginfo.css'
import Eight from '../EightLogo/Eight';
import { useNavigate } from 'react-router-dom';
export default function Loginfo() {
	const navigate = useNavigate()
  return (
      <div className="frm">
		
	    	<form className="login" method="post" action="">
                <h2>Log In</h2>
	    		<label htmlFor="email">Username: </label><br/>
	    		<input type="email" name="email" placeholder="abcde@gmail.com" id="email" /><br/><br/>
	    		<label htmlFor="pwd">Password: </label><br/>
	    		<input type="password" name="password" placeholder="alphanumeric with symbols" id="pwd" /><br/><br/>
                <input type="button" value="Login" id="login" onClick={() => navigate("/")}/> &nbsp;&nbsp;
	    		<input type="button" value="Forgot Password" id="forgot" />
	        </form>
			<Eight />
	  </div>
  );
}
