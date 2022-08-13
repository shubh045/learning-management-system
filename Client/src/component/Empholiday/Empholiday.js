import "./Empholiday.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,Legend, Tooltip } from 'recharts';
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Empholiday = () => {


  const data = [
    { name: "Medical Leave", Used: 2, Total: 5 },
    { name: "Casual Leave", Used: 1, Total: 2 },
    { name: "Parental Leave", Used: 0, Total: 10 },
];


    const [list, setList] = useState([]);
    const fetchLlist = async () => {
      await axios
      .get("http://localhost:3100/homeholiday")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
    }
  
    useEffect( () => {
      fetchLlist()
    }, []);

    const [bday, setBday] = useState([]);
    const fetchLst = async () => {
      await axios
      .get("http://localhost:3100/homebirthday")
      .then((res) => {
        setBday(res.data);
      })
      .catch((err) => console.log(err));
    }
  
    useEffect( () => {
      fetchLst()
    }, []);

  return (
      <div className="home-page">
          <div className="emph">
            <table className="tbl" id="tbl">
              <caption>Employees on Leave Today</caption>
              <thead>
              <tr>
                <th>Employee Name</th>
                <th>Role</th>
                <th>Reporting Manager</th>
              </tr>
              </thead>
              <tbody>
              
              <tr>
                <td>Shubham</td>
                <td>HR</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>Shivansh</td>
                <td>Engineering Intern</td>
                <td>Anuj</td>
              </tr>
              <tr>
                <td>Sunny</td>
                <td>Engineering Intern</td>
                <td>Anuj</td>
              </tr>

              <tr>
                <td>Suman</td>
                <td>Engineering Intern</td> 
                <td>Anuj</td> 
              </tr>
              
              </tbody>
            </table>


            <BarChart width={500} height={300} data={data} >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Used" stackId="a" fill= "#d261ff"/>
            <Bar dataKey="Total" stackId="a" fill="#440263" />
        </BarChart>
          </div>

        <div className="list-items">
          <div className="card">
            <ul className="card-list">
              <h3 className="head">Upcoming Birthdays</h3>
              {bday.map(c=>{
            const {_id,fn,ln,email,pass,contact,role,doj,dob,gender,address,city,state,postal,mname,memail,rt}=c;
            return(
              <>
         <li key={_id}>{dob.substring(8,10) + "-" + dob.substring(5,7) + "-" + dob.substring(0,4)} - {fn +" "+ ln}</li>
              </>
            )
          })}
            </ul>
          </div>

          <div className="card">
            <ul className="card-list">
              <h3 className="head">Upcoming Holidays</h3>
              {list.map(c=>{
            const {_id,date,event}=c;
            return(
              <>
         <li key={_id}>{date.substring(8,10) + "-" + date.substring(5,7) + "-" + date.substring(0,4)} - {event}</li>
              </>
            )
          })}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Empholiday;

