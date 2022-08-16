import React from 'react'
import './Profileinfo.css'
import { useNavigate } from 'react-router-dom'
import dummy from './dummypic.jpg'
import { useState , setValue} from 'react'
//pic,name,email,dob,doj,roll,gender,contact no, address, reporting manager,leave request,pending leave
import { useAuthContext } from '../../AuthContext'
import axios from '../axios'



export default function Profileinfo() {

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


	// const navigate = useNavigate()
  const [isReadonly, setIsReadonly] = useState(true);
  const [buttonText, setButtonText] = useState('Edit');
  const [Text, setText] = useState('Full Name');
  const handlec=()=>{setIsReadonly(prevState => !prevState);}
  const handlecl=()=>{
    if (buttonText==="Edit"){
      setButtonText('Save');
    }else{
      setButtonText('Edit');
    }
  }
  const handlech=(event)=>{
    setText(event.target.value); 
   }

  return (
    <div className="info">
	    	<div className='tinfo'>
				<input type="text" name="fullname" id="myipt"  defaultValue={user.firstName + " " + user.lastName} readOnly/>
				<img src={dummy} className='image' alt="pic"/>
			</div>
			< div className='minfo'>
        <div className='minfoin'>
          <div>Email: <input type="text" name="email" id="myip" defaultValue={user.email} readOnly/></div>
          <div>DOB: <input type="text" name='dob' id="myip" defaultValue={user.dob} readOnly/></div>
          <div>Contact No: <input type="text" id="myip" name="contact" defaultValue={user.contactNumber} readOnly/></div>
          <div>Role: <input type="text" id="myip" name="role" defaultValue={user.role} readOnly/></div>
          <div>DOJ: <input type="text" id="myip" name="joining" defaultValue={user.joining} readOnly/></div>
          </div>
          <div className='minfoin'>
          <div>Gender: <input type="text" id="myip" name="gender" defaultValue={user.gender} readOnly/></div>
          <div>Address: <input type="text" id="myip" name="address" defaultValue={user.address+" "+user.city + " " + user.state+" "+user.postalCode} readOnly/></div>
          <div>Manager Name: <input type="text" id="myip" name="managerName" defaultValue={user.managerName} readOnly/></div>
          <div>Manager Email: <input type="text" id="myip" name="managerEmail" defaultValue={user.managerEmail} readOnly /></div>
          {/* <div>Leave Applied: <input type="text" id="myip" value="approve/Total" readOnly={isReadonly} onInput={e => setValue(e)}/></div> */}
          </div>
			</div>
			<div className='binfo'>
			<button className='edit' onClick={()=> {handlec(); handlecl();}}>{buttonText}</button>
      <button className='changepass' onClick={() => navigate("/change-pwd")}>Change Password</button>
			</div>
	  </div>
  )
}

