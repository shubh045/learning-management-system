import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown , faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import './pendreq.css'
const Pendreq = () => {
    const[state , setState]=useState(0)
    function button(){
        if (state===0){
            return(
                <button onClick={() => setState(1)} className='b3'><FontAwesomeIcon icon={faCaretDown} /></button>
            ) 
        }
        else{
            return(
                <button onClick={() => setState(0)} className='b3'><FontAwesomeIcon icon={faCaretUp} /></button>
            )
        }
    }
    function extend(){
        if (state===1){
            return(
                <>
                <div>
                <p style={{padding:"10px"}}>Description: {}</p>
                <p style={{padding:"10px"}}>Leave Status:</p>
                </div>
                </>
            )
        }
    }
    return(
        <div className='penwrap'>
        <div className="emname">
            <label>Employee Name: {}</label>
            <div className="button">
            <button className='b1'><b>ACCEPT</b></button>
            <button className='b2'><b>REJECT</b></button>
            {button()}
            </div>
        </div>
        <div className="suject">
            <p style={{padding:"10px"}}>Type of Leave: {}</p>
            <p style={{padding:"10px"}}>Subject: {}</p>
            <p style={{padding:"10px" ,display:"inline-block"}}>From Date: {}</p>
            <p style={{display:"inline-block"}}>To Date: </p>
            {extend()}
        </div>
        </div>
    );
}

export default Pendreq

 