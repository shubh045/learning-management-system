import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown , faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import './pendreq.css'
const Pendreq = () => {
    const[state , setState]=useState(0)
    function button(){
        if (state===0){
            return(
                <button onClick={() => setState(1)} style={{backgroundColor:"rgb(102, 14, 102)",
                borderColor:'rgb(102, 14, 102)'}}><FontAwesomeIcon icon={faCaretDown} /></button>
            )
        }
        else{
            return(
                <button onClick={() => setState(0)} style={{backgroundColor:"rgb(102, 14, 102)",
                borderColor:'rgb(102, 14, 102)'}}><FontAwesomeIcon icon={faCaretUp} /></button>
            )
        }
    }
    function extend(){
        if (state===1){
            return(
                <>
                <div>
                <label>Description: {}</label><br/>
                <label>Leave Status:</label>
                </div>
                </>
            )
        }
    }
    return(
        <>
        <div className="empname">
            <label>Employee Name: {}</label>
            <div className="button">
            <button style={{backgroundColor:"green" , borderColor:"white"}}>ACCEPT</button>
            <button style={{backgroundColor:"red" , borderColor:'white'}}>REJECT</button>
            {button()}
            </div>
        </div>
        <div className="subject">
            <label>Type of Leave: {}</label><br/>
            <label>Subject: {}</label><br/>
            <label>From Date: {}</label>
            <label>To Date: </label><br/>
            {extend()}
        </div>
        </>
    );
}

export default Pendreq

 