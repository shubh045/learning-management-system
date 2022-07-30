import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown , faCaretUp, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import './History.css'

const History = () => {
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
                <label>From Date: {}</label>
                <label>To Date: </label><br/>
                <label>Description: {}</label><br/>
                </>
            )
        }
    }
    return(
        <>
        <div className='filter'>
        <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder='SEARCH...' />
            </div>
            <div>
            <br/><label>FILTER:</label>
            <select>
                <option>Accepted</option>
                <option>Rejected</option>
                <option>My History</option>
            </select><br/><br/>
            </div>
        </div>
        <div className="empnam">
            <label>Employee Name: {}</label>
            <div className="button">
            <label>Status: Accepted</label>
            {button()}
            </div>
        </div>
        <div className="subjec">
            <label style={{padding:"5px"}}>Date of Leave applied:</label><br/>
            <label style={{padding:"5px"}}>Type of Leave: {}</label><br/>
            <label style={{padding:"5px"}}>Subject: {}</label><br/>
            {extend()}
        </div>
        <div className="empna">
            <label>Employee Name: {}</label>
            <div className="button">
            <label>Status: Rejected</label>
            {button()}
            </div>
        </div>
        <div className="subje">
            <label style={{padding:"5px"}}>Date of Leave applied:</label><br/>
            <label style={{padding:"5px"}}>Type of Leave: {}</label><br/>
            <label style={{padding:"5px"}}>Subject: {}</label><br/>
            {extend()}
        </div>
        </>
    );
}
export default History