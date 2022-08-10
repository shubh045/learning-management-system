import React from 'react'
import axios from 'axios';
import './Loginfo.css'
import { useState } from 'react';
import Eight from '../EightLogo/Eight';
import { useNavigate } from 'react-router-dom'

export default function Loginfo() {
  const navigate = useNavigate();
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [errorMessage, changeErrorMessage] = useState('');
  const submitChange =  (e) => {
    console.log(email, password);
    e.preventDefault();
    axios
      .post('http://127.0.0.1:3100/user/login', { email, password })
      .then((response) => {
        navigate('/');
        console.log(JSON.stringify(response));
      })
      .catch((error) => {
        console.log("not authenticated");
        console.log(JSON.stringify(error));
        console.log(JSON.stringify(error.data));
        changeErrorMessage('email or password is not correct');
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
          placeholder="abcde@gmail.com"
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
          placeholder="alphanumeric with symbols"
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
        {errorMessage && <p style={{background: "red", padding: "10px", color: "#fff", maxWidth:"500px"}}>{errorMessage}</p>}
        <input
          type="button"
          value="Forgot Password"
          id="forgot"
        />
      </form>
      <Eight />
    </div>
  );
}