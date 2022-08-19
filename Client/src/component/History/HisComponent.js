import DescButton from "../PendingRequest/DescButton";
import HistDesc from "./Histdesc";
import { useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const HisComponent = (props) => {
  const [state, setState] = useState({ toggl: false, arrow: faCaretDown });
  function handleClick() {
    setState((prev) => ({ ...prev, toggl: !prev.toggl }));
    if (state.toggl) {
      setState((prev) => ({ ...prev, arrow: faCaretDown }));
    } else {
      setState((prev) => ({ ...prev, arrow: faCaretUp }));
    }
  }

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

  return (
    <div className="his-con">
        <div>
      <div className="empnam" style={{backgroundColor: props.color, borderColor: props.color }}>
        <p>
          <b>{userName}</b>
        </p>
        <div className="button">
          <p style={{ display: "inline-block" }}>
            <b>{props.status}</b>
          </p>
          <DescButton
            handleClick={handleClick}
            arrow={state.arrow}
            key={props.key}
            id={props.id}
          />
        </div>
      </div>
      <div className="subjec">
        <p style={{ padding: "7px" }}>Date of Leave applied: {dateApplied.split('T')[0]}</p>
        <p style={{ padding: "7px" }}>Type of Leave: {leaveType}</p>
        <p style={{ padding: "7px" }}>Subject: {subject}</p>
        {state.toggl && (
          <HistDesc
            description={description}
            toDate={toDate.split('T')[0]}
            fromDate={fromDate.split('T')[0]}
          />
        )}
      </div>
      </div>
    </div>
  );
};

export default HisComponent;
