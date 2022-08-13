import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./pendreq.css";
import { useAuthContext } from "../../AuthContext";
import axiosInstance from "../axios";
import Pending from "./Pending";

const Pendreq = () => {
  const [leaveData, setLeaveData] = useState([]);
  const { user } = useAuthContext();

  const getLeaveData = async () => {
    try {
      const lData = await axiosInstance.get("/api/leaveApply");
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

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {[...leaveData].map((emp, index) => (
        <Pending
          emp={emp}
          user={user}
          key={index}
          id={index}
          index={index}
          leaveData={leaveData}
        />
      ))}
    </div>
  );
};

export default Pendreq;
