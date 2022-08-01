import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown , faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import './pendreq.css'
const Pendreq = () => {
    const[state , setState]=useState(0)
    function button(){
        if (state===0){
            return(
                <button onClick={() => setState(1)} className="b3"><FontAwesomeIcon icon={faCaretDown} /></button>
            )
        }
        else{
            return(
                <button onClick={() => setState(0)} className="b3"><FontAwesomeIcon icon={faCaretUp} /></button>
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
        <div className='penwrap'>
        <div className="emname">
            <label>Employee Name: {}</label>
            <div className="button">
            {<button class="button b1"><b>ACCEPT</b></button>}
            {<button class="button b2"><b>REJECT</b></button>}
            {button()}
            </div>
        </div>
        <div className="suject">
            <label>Type of Leave: {}</label><br/>
            <label>Subject: {}</label><br/>
            <label>From Date: {}</label>
            <label>To Date: </label><br/>
            {extend()}
        </div>
        </div>
    );
}

export default Pendreq

 