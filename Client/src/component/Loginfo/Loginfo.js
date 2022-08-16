import React from 'react'
import './Loginfo.css'
import { useState } from 'react';
import Eight from '../EightLogo/Eight';
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../AuthContext';
import axiosInstance from '../axios';

export default function Loginfo() {
  const navigate = useNavigate();
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [errorMessage, changeErrorMessage] = useState('');
  const {user, updateUser} = useAuthContext()
  

  const submitChange =  (e) => {
    console.log(email, password);
    e.preventDefault();
    axiosInstance
      .post('login', { email, password })
      .then((response) => {
        console.log(response)
        // localStorage.setItem('jwtToken', response.data.token)
        // axiosInstance.defaults.headers.common['Authorization'] = response.data.token
        updateUser(response.data.payload.user)
        navigate('/');
        console.log(JSON.stringify(response));
      })
      .catch((error) => {
        changeErrorMessage('email or password is not correct', error);
      });
  };
  return (
    <div className="frm">
      <form className="login" method="post" action="">
        <h2>Log In</h2>
        <label htmlFor="email">Username: </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          onChange={(e) => changeEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="pwd">Password: </label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="pwd"
          onChange={(e) => changePassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="button"
          value="Login"
          id="login"
          onClick={submitChange}
        />{" "}
        &nbsp;&nbsp;
        {/* {errorMessage && <p style={{background: "red", padding: "10px", color: "#fff", maxWidth:"500px"}}>{errorMessage}</p>} */}
        <input
          type="button"
          value="Forgot Password"
          id="forgot"
        />
        {errorMessage && <p style={{background: "red", padding: "10px", color: "#fff", maxWidth:"500px"}}>{errorMessage}</p>}
      </form>
      <Eight />
    </div>
  );
}