import React from 'react'
import './Profileinfo.css'
import { useNavigate } from 'react-router-dom'
import dummy from './dummypic.jpg'
//pic,name,email,dob,doj,roll,gender,contact no, address, reporting manager,leave request,pending leave
export default function Profileinfo() {
	const navigate = useNavigate()
  const handleonclick=()=>{
    // document.getElementById("myipt").readOnly="false";
    // document.getElementById("myipt").style.background="visible";
    document.getElementsByClassName("edit").textContent="Save";
    // document.getElementById("myip").readOnly="false";
  }
  return (
    <div className="info">
	    	<div className='tinfo'>
				<input type="text" id="myipt" value="Full Name" />
				<img src={dummy} className='image' alt="pic"/>
			</div>
			< div className='minfo'>
        <div className='minfoin'>
          <div>Email: <input type="email" id="myip" value="abc@gmail.com" readOnly/></div>
          <div>DOB: <input type="text" id="myip" value="dd-mm-yyyy" readOnly/></div>
          <div>Contact No: <input type="text" id="myip" value="xxxxxxxxxx" readOnly/></div>
          <div>Roll: <input type="text" id="myip" value="XXXXX" readOnly/></div>
          <div>DOJ: <input type="text" id="myip" value="dd-mm-yyyy" readOnly/></div>
          </div>
          <div className='minfoin'>
          <div>Gender: <input type="text" id="myip" value="display gender" readOnly/></div>
          <div>Address: <input type="text" id="myip" value="display address" readOnly/></div>
          <div>Manager Name: <input type="text" id="myip" value="display name" readOnly/></div>
          <div>Manager Email: <input type="text" id="myip" value="abc@gmail.com" readOnly/></div>
          <div>Leave Applied: <input type="text" id="myip" value="approve/Total" readOnly/></div>
          </div>
			</div>
			<div className='binfo'>
			<button className='edit' onClick={handleonclick}>Edit</button>
      <button className='changepass' onClick={() => navigate("/change-pwd")}>Change Password</button>
			</div>
	  </div>
  )
}
