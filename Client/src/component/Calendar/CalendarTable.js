import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarTable.css'


function CalendarTable() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='calwrap'>
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
    </div>
  );
}

export default CalendarTable;