import React from 'react'
import './Profileinfo.css'
import { useNavigate } from 'react-router-dom'
import dummy from './dummypic.jpg'
//pic,name,email,dob,doj,roll,gender,contact no, address, reporting manager,leave request,pending leave
export default function Profileinfo() {
	const navigate = useNavigate()
  return (
    <div className="info">
	    	<div className='tinfo'>
				<h2>Full Name</h2>
				<img src={dummy} className='image' alt="pic"/>
			</div>
			<div className='minfo'>
				<div>Email: abc@gmail.com</div>
        <div>DOB: dd-mm-yyyy</div>
        <div>Contact No: xxxxxxxxxx</div>
        <div>Roll: XXXXX</div>
        <div>DOJ: dd-mm-yyyy</div>
        <div>Gender: display gender</div>
        <div>Address: display address</div>
        <div>Reporting Manager Name: display name</div>
        <div>Reporting Manager Email: abc@gmail.com</div>
        <div>Leave Applied: approve/Total</div>
			</div>
			<div className='binfo'>
			<button className='edit'>Edit</button>
      <button className='changepass' onClick={() => navigate("/change-pwd")}>Change Password</button>
			</div>
	  </div>
  )
}
