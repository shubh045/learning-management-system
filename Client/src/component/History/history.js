import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./history.css";
import axiosInstance from "../axios";
import { useAuthContext } from "../../AuthContext";

const History = () => {
  
  const {user} = useAuthContext();

  const [leaveData, setLeaveData] = useState([]);

  const getLeaveData = async () => {
    try {
      const lData = await axiosInstance.get("api/leaveApply");
      console.log(lData.data.leave);
      if (lData.data.leave) {
        setLeaveData(lData.data.leave);
      }
    } catch (error) {
      console.log(error.error);
      // setErrorMessage(error.error)
    }
  };
  useEffect(() => {
    getLeaveData();
  }, []);

  const [state, setState] = useState(0);
  function button() {
    if (state === 0) {
      return (
        <button onClick={() => setState(1)} className="b31"><FontAwesomeIcon icon={faCaretDown} /></button>
      );
    } 
    else {
      return (
        <button onClick={() => setState(0)} className="b31"><FontAwesomeIcon icon={faCaretUp} /></button>
      );
    }
  }

  function extend(userEmail,
    userName,
    status,
    dateApplied,
    leaveType,
    fromDate,
    toDate,
    subject,
    description,) {
    if (state === 1) {
      return (
        <>
          <p style={{display:"inline-block" ,padding:"7px"}}>From Date: {fromDate}</p>
          <p style={{display:"inline-block" ,padding:"7px"}}>To Date: {toDate}</p>
          <br />
          <p style={{padding:"7px"}}>Description: {description}</p>
          <br />
        </>
      );
    }
  }

  function historyAll(userEmail,
    userName,
    status,
    dateApplied,
    leaveType,
    fromDate,
    toDate,
    subject,
    description,) {
    if (userEmail===user.email){
      if (status==="Accepted") {
        return(
          <>
            <div className="empnam">
              <p><b>Leave Accepted</b></p>
              <div className="button">
                <p style={{display:"inline-block"}}><b>Leave Accepted</b></p>
                {button()}
              </div>
            </div>
            <div className="subjec">
              <p style={{ padding: "7px" }}>Date of Leave applied: {dateApplied}</p>
              <p style={{ padding: "7px" }}>Type of Leave: {leaveType}</p>
              <p style={{ padding: "7px" }}>Subject: {subject}</p>
              {extend(userEmail,
          userName,
          status,
          dateApplied,
          leaveType,
          fromDate,
          toDate,
          subject,
          description,)}
            </div>
          </>
        )
      }
      else {
        return(
          <>
          <div className="empna">
              <p><b>Leave Rejected</b></p>
              <div className="button">
                <p  style={{display:"inline-block"}}><b>Leave Rejected</b></p>
                {button()}
              </div>
            </div>
            <div className="subje">
              <p style={{ padding: "7px" }}>Date of Leave applied: {dateApplied}</p>
              <p style={{ padding: "7px" }}>Type of Leave: {leaveType}</p>
              <p style={{ padding: "7px" }}>Subject: {subject}</p>
              {extend(userEmail,
          userName,
          status,
          dateApplied,
          leaveType,
          fromDate,
          toDate,
          subject,
          description,)}
            </div>
          </>
        )
      }
    }
  }

  function historyAccepted(userEmail,
    userName,
    status,
    dateApplied,
    leaveType,
    fromDate,
    toDate,
    subject,
    description,) {
    if (userEmail===user.email && status==="Accepted") {
      return(
        <>
          <div className="empnam">
            <p><b>Leave Accepted</b></p>
            <div className="button">
              <p style={{display:"inline-block"}}><b>Leave Accepted</b></p>
              {button()}
            </div>
          </div>
          <div className="subjec">
            <p style={{ padding: "7px" }}>Date of Leave applied: {dateApplied}</p>
            <p style={{ padding: "7px" }}>Type of Leave: {leaveType}</p>
            <p style={{ padding: "7px" }}>Subject: {subject}</p>
            {extend()}
          </div>
        </>
      )
    }
  }

  function historyRejected(userEmail,
    userName,
    status,
    dateApplied,
    leaveType,
    fromDate,
    toDate,
    subject,
    description,) {
    if (userEmail===user.email && status==="Rejected") {
      return(
        <>
          <div className="empna">
            <p><b>Leave Rejected</b></p>
            <div className="button">
              <p  style={{display:"inline-block"}}><b>Leave Rejected</b></p>
              {button()}
            </div>
          </div>
          <div className="subje">
            <p style={{ padding: "7px" }}>Date of Leave applied: {dateApplied}</p>
            <p style={{ padding: "7px" }}>Type of Leave: {leaveType}</p>
            <p style={{ padding: "7px" }}>Subject: {subject}</p>
            {extend()}
          </div>
        </>
      )
    }
  }

  const changeHandler = (event,userEmail,
    userName,
    status,
    dateApplied,
    leaveType,
    fromDate,
    toDate,
    subject,
    description,) => {
    const value = event.target.value;
    if(value==="all") 
    {
      return(
        <>
        {
          historyAll(userEmail,
            userName,
            status,
            dateApplied,
            leaveType,
            fromDate,
            toDate,
            subject,
            description,)
        }
        </>
      )
    }
    else if(value==="accepted")
    {
      return(
        <>
        {
          historyAccepted(userEmail,
            userName,
            status,
            dateApplied,
            leaveType,
            fromDate,
            toDate,
            subject,
            description,)
        }
        </>
      )
    }
    else if(value==="rejected")
    {
      return(
        <>
        {
          historyRejected(userEmail,
            userName,
            status,
            dateApplied,
            leaveType,
            fromDate,
            toDate,
            subject,
            description,)
        }
        </>
      )
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {[...leaveData].map((emp, index) => {
        const {
          userEmail,
          userName,
          status,
          dateApplied,
          leaveType,
          fromDate,
          toDate,
          subject,
          description,
        } = emp;
  
  return (
    <>
      <div className="his-con">
        <div className="filter">
          {/* <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="SEARCH" />
          </div> */}
          <div>
            <br />
            <label htmlFor="filter">FILTER:</label>
            <select onChange={() => changeHandler(userEmail,
          userName,
          status,
          dateApplied,
          leaveType,
          fromDate,
          toDate,
          subject,
          description,)} name="filter" id="filter">
              <option value="all">All</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
})}
</div>
);
};
export default History;