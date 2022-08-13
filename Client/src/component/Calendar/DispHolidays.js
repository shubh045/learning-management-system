import React, { useEffect } from "react";
import './DispHolidays.css'
import { useState } from "react";
import axios from "axios";

const DispHolidays = () => {
  const [list, setList] = useState([]);
  const fetchLlist = async () => {
    await axios
    .get("http://localhost:3100/holiday")
    .then((res) => {
      setList(res.data);
    })
    .catch((err) => console.log(err));
  }

  useEffect( () => {
    fetchLlist()
  }, []);

  return (
    <>
        <ul className="holilistt">
          <li className="holif">List of Holidays</li>
          {list.map(c=>{
            const {_id,date,event}=c;
            return(
              <>
         <li key={_id}>{date.substring(8,10) + "-" + date.substring(5,7) + "-" + date.substring(0,4)} - {event}</li>
              </>
            )
          })}
        </ul>
    </>
  );
};

export default DispHolidays;