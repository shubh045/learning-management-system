import { useEffect, useState } from "react";
import "./history.css";
import axiosInstance from "../axios";
import { useAuthContext } from "../../AuthContext";
import HisComponent from "./HisComponent";

const History1 = () => {
  const { user } = useAuthContext();

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "10px",
        paddingRight: "10px",
      }}
    >
      {[...leaveData].map((emp, index) => {
        if (emp.status !== "" && emp.userEmail === user.email) {
          if (emp.status === "Accepted") {
            return (
              <HisComponent
                emp={emp}
                key={index}
                id={index}
                status={emp.status}
                color="green"
              />
            );
          } else {
            return (
              <HisComponent
                emp={emp}
                key={index}
                id={index}
                status={emp.status}
                color="red"
              />
            );
          }
        }
      })}
    </div>
  );
};

export default History1;
