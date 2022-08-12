import "./Empholiday.css";
import { PieChart, Pie, Cell } from "recharts";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Empholiday = () => {

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


  const data = [
    { name: "Medical leave", leave: 20 },
    { name: "Casual leave", leave: 13 },
    { name: "Parental leave", leave: 30 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  const renderCustomizedLabel = ({ x, y, name }) => {
    return (
      <text
        x={x+30}
        y={y}
        fill="purple"
        textAnchor="end"
      >
        {name}
      </text>
    );
  };
  return (
      <div className="home-page">
        <div className="piet">
          <div className="emph">
            <h3 className="head">Employees on Leave Today </h3>
            <br />
            <table className="tbl" border={1} id="tbl">
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
              </tbody>
            </table>
          </div>
          {/* <div className="piec">
            <PieChart width={550} height={500} >
              <Pie
                data={data}
                dataKey="leave"
                outerRadius={200}
                label={renderCustomizedLabel}
                nameKey="name"
                isAnimationActive={false}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart> */}
            {/* <div className="leave-con">
              <p className="leaves">
                <span className="col-block m-leave"></span>Medical leave
              </p>
              <p className="leaves">
                <span className="col-block c-leave"></span>Casual leave
              </p>
              <p className="leaves">
                <span className="col-block p-leave"></span>Parental leave
              </p>
            </div> */}
          {/* </div> */}
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

