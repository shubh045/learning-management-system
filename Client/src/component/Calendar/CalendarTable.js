import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

//import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import events from "./Event";
import "./calendarTable.css";
import DispHolidays from "./DispHolidays";
import { useState, useEffect } from "react";
import axiosInstance from "../axios";

export default function CalendarTable() {
  const [onLeave, setOnLeave] = useState([]);
  // const [leaveCal, setLeaveCal] = useState([]);
  let leaveCal = [];

  const getEmpOnLeave = async () => {
    try {
      const lData = await axiosInstance.get("/api/empLeave");
      // console.log(lData.data);
      if (lData.data.onLeave) {
        setOnLeave(lData.data.onLeave);
      }
    } catch (error) {
      console.log(error.error);
      // setErrorMessage(error.error)
    }
  };
  useEffect(() => {
    getEmpOnLeave();
  }, []);

  [...onLeave].map((leave) => {
    leaveCal = [
      ...leaveCal,
      {
        title: leave.userName,
        start: leave.fromDate.toString(),
        end: leave.toDate,
      },
    ];
    return leaveCal;
  });

  console.log("leavecal", leaveCal);

  return (
    <div className="calendar">
      <div className="cal">
        <FullCalendar
          // defaultView="dayGridMonth"
          // themeSystem="Simplex"
          // header={{
          //   left: "prev,next",
          //   center: "title",
          //   right: "dayGridMonth,timeGridWeek,timeGridDay",
          // }}
          plugins={[dayGridPlugin]}
          events={leaveCal}
          displayEventEnd="true"
          eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        />
      </div>
      <DispHolidays />
    </div>
  );
}
