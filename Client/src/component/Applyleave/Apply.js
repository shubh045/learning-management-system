import React from "react";
import "./Apply.css";
import { useState } from "react";
import { useAuthContext } from "../../AuthContext";
import axiosInstance from "../axios";

const hrEmail = "shivansh.singh@block8.com";


function Apply() {

  const today = new Date().toISOString().split('T')[0];
  const {user} = useAuthContext()

  const [leave, setLeave] = useState({
    userEmail: user.email,
    userName: user.firstName+" "+user.lastName,
    status: "",
    dateApplied: today,
    leaveType: "",
    fromDate: "",
    toDate: "",
    subject: "",
    description: "",
    managerEmail: [hrEmail,user.managerEmail]
  });

  const [errMessage, setErrMessage] = useState("");
  const [lresult, setLresult] = useState("");

  const lchangeHandler = (event) => {
    const { name, value } = event.target;
    setLeave({
      ...leave,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLresult("");
      setErrMessage("");
      const data = await axiosInstance.post("api/leaveApply", {
        ...leave,
      })
      console.log(data);
      if (!data.data.error) {
        setLresult(data.data.message);
      } else {
        setErrMessage(data.data.error);
      }
    } catch (error) {
      console.log(error);
      setErrMessage(error.error);
    }
  };

  console.log(leave);

  return (
    <>
      <form onSubmit={submitHandler} className="main">
        <select
          name="leaveType"
          class="Leave"
          value={leave.leaveType}
          onChange={lchangeHandler}
        >
          <option selected value="Type of Leave">
            Type of Leave
          </option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Paid Leave">Paid Leave</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Maternity Leave">Maternity Leave</option>
        </select>

        <div className="date">
          <label htmlFor="From">From</label>
          <input type="date" value={leave.fromDate} onChange={lchangeHandler} name="fromDate" min={today} />
          <label htmlFor="To">To</label>
          <input type="date" value={leave.toDate} onChange={lchangeHandler} name="toDate" min={leave.fromDate} />
        </div>

        <input
          type="text"
          className="subject"
          placeholder="Subject"
          onChange={lchangeHandler}
          name="subject"
        />
        <input
          type="text"
          className="description"
          placeholder="Description"
          value={leave.description}
          onChange={lchangeHandler}
          name="description"
        />
        <div className="btn">
          <button type="submit">Apply Now</button>
        </div>
        {errMessage && <p style={{background: "red", padding: "10px", color: "#fff", maxWidth:"500px"}}>Fill all required data</p>}
    {lresult && <p style={{background: "green", padding: "10px", color: "#fff"}}>Leave Sent Successfully</p>}
      </form>
    </>
  );
}

export default Apply;
