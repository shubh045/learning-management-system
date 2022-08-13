import DescButton from "./DescButton";
import Description from "./Description";
import Response from "./Response";
import { useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../axios";

const Pending = (props) => {
  const [state, setState] = useState({ toggl: false, arrow: faCaretDown });
  function handleClick() {
    setState((prev) => ({ ...prev, toggl: !prev.toggl }));
    if (state.toggl) {
      setState((prev) => ({ ...prev, arrow: faCaretDown }));
    } else {
      setState((prev) => ({ ...prev, arrow: faCaretUp }));
    }
  }

  const statusHandler = (id, val) => {
    const res = axiosInstance.put("api/leaveApply", {
      id: id,
      status: val,
    });
    console.log(props.leaveData, res);
  };

  const {
    _id,
    userEmail,
    userName,
    status,
    dateApplied,
    leaveType,
    fromDate,
    toDate,
    subject,
    description,
    managerEmail,
  } = props.emp;
  for (const email of managerEmail) {
    if (email === props.user.email && status === "") {
      console.log(email);
      return (
        <div className="penwrap" key={props.index}>
          <div className="emname">
            <label>{userName}</label>
            <div className="button">
              <Response
                response="Accept"
                className="b1"
                statusHandler={() => statusHandler(_id, "Accepted")}
              />
              <Response
                response="Reject"
                className="b2"
                statusHandler={() => statusHandler(_id, "Rejected")}
              />
              <DescButton
                handleClick={handleClick}
                arrow={state.arrow}
                key={props.index}
                id={props.index}
                index={props.index}
              />
            </div>
          </div>
          <div className="suject">
            <p style={{ padding: "10px" }}>Type of Leave: {leaveType}</p>
            <p style={{ padding: "10px" }}>Subject: {subject}</p>
            <p style={{ padding: "10px", display: "inline-block" }}>
              From Date: {fromDate}
            </p>
            <p style={{ display: "inline-block" }}>To Date: {toDate}</p>
            {state.toggl && <Description description={description} />}
          </div>
        </div>
      );
    }
  }
};

export default Pending;
