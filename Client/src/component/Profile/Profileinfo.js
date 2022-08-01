import React from 'react'
import './Profileinfo.css'
import { useNavigate } from 'react-router-dom'
import dummy from './dummypic.jpg'
import { useState , setValue} from 'react'
//pic,name,email,dob,doj,roll,gender,contact no, address, reporting manager,leave request,pending leave
export default function Profileinfo() {
	const navigate = useNavigate()
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
				<input type="text" id="myipt"  readOnly={isReadonly} onInput={e => setValue(e)} value={Text} onChange={handlech}/>
				<img src={dummy} className='image' alt="pic"/>
			</div>
			< div className='minfo'>
        <div className='minfoin'>
          <div>Email: <input type="text" id="myip" value="abc@gmail.com" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          <div>DOB: <input type="text" id="myip" value="dd-mm-yyyy" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          <div>Contact No: <input type="text" id="myip" value="xxxxxxxxxx" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          <div>Roll: <input type="text" id="myip" value="XXXXX" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          <div>DOJ: <input type="text" id="myip" value="dd-mm-yyyy" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          </div>
          <div className='minfoin'>
          <div>Gender: <input type="text" id="myip" value="display gender" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          <div>Address: <input type="text" id="myip" value="display address" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          <div>Manager Name: <input type="text" id="myip" value="display name" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          <div>Manager Email: <input type="text" id="myip" value="abc@gmail.com" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          <div>Leave Applied: <input type="text" id="myip" value="approve/Total" readOnly={isReadonly} onInput={e => setValue(e)}/></div>
          </div>
			</div>
			<div className='binfo'>
			<button className='edit' onClick={()=> {handlec(); handlecl();}}>{buttonText}</button>
      <button className='changepass' onClick={() => navigate("/change-pwd")}>Change Password</button>
			</div>
	  </div>
  )
}
