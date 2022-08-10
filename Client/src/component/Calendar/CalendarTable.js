import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

//import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import events from "./Event";
import "./calendarTable.css"
import DispHolidays from "./DispHolidays"


export default function CalendarTable() {
  return (
    <div className="calendar">
      <div className="cal">
      <FullCalendar
        defaultView="dayGridMonth"
        // themeSystem="Simplex"
        // header={{
        //   left: "prev,next",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay",
        // }}
        plugins={[dayGridPlugin]}
        events={events}
        displayEventEnd="true"
        eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
      /></div>
      <DispHolidays/>
    </div>
  );
}
