import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./history.css";

const History = () => {
  const [state, setState] = useState(0);
  function button() {
    if (state === 0) {
      return (
        <button
          onClick={() => setState(1)}
          className="b31"
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setState(0)}
          className="b31"
        >
          <FontAwesomeIcon icon={faCaretUp} />
        </button>
      );
    }
  }
  function extend() {
    if (state === 1) {
      return (
        <>
          <p style={{display:"inline-block" ,padding:"7px"}}>From Date: {}</p>
          <p style={{display:"inline-block" ,padding:"7px"}}>To Date: </p>
          <br />
          <p style={{padding:"7px"}}>Description: {}</p>
          <br />
        </>
      );
    }
  }
  return (
    <>
      <div className="his-con">
        <div className="filter">
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="SEARCH..." />
          </div>
          <div>
            <br />
            <label>FILTER:</label>
            <select>
              <option>Accepted</option>
              <option>Rejected</option>
              <option>My History</option>
            </select>
            <br />
            <br />
          </div>
        </div>
        <div>
          <div className="empnam">
            <p>Employee Name: {}</p>
            <div className="button">
              <p style={{display:"inline-block"}}><b>Status: Accepted</b></p>
              {button()}
            </div>
          </div>
          <div className="subjec">
            <p style={{ padding: "7px" }}>Date of Leave applied:</p>
            <p style={{ padding: "7px" }}>Type of Leave: {}</p>
            <p style={{ padding: "7px" }}>Subject: {}</p>
            {extend()}
          </div>
          <div className="empna">
            <p>Employee Name: {}</p>
            <div className="button">
              <p  style={{display:"inline-block"}}><b>Status: Rejected</b></p>
              {button()}
            </div>
          </div>
          <div className="subje">
            <p style={{ padding: "7px" }}>Date of Leave applied:</p>
            <p style={{ padding: "7px" }}>Type of Leave: {}</p>
            <p style={{ padding: "7px" }}>Subject: {}</p>
            {extend()}
          </div>
        </div>
      </div>
    </>
  );
};
export default History;
