import "./Empholiday.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../axios";

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
  };

  useEffect(() => {
    fetchLlist();
  }, []);

  const [bday, setBday] = useState([]);
  const fetchLst = async () => {
    await axios
      .get("http://localhost:3100/homebirthday")
      .then((res) => {
        setBday(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchLst();
  }, []);

  const [empLeave, setEmpLeave] = useState([]);

  const getEmpLeave = async () => {
    try {
      const lData = await axiosInstance.get("/api/empLeave");
      console.log(lData.data);
      if (lData.data.onLeave) {
        setEmpLeave(lData.data.onLeave);
      }
    } catch (error) {
      console.log(error.error);
      // setErrorMessage(error.error)
    }
  };
  useEffect(() => {
    getEmpLeave();
  }, []);

  const [empl, setEmpl] = useState([]);

  const getEmployee = async () => {
    try {
      const empData = await axiosInstance.get("/api/addEmp");
      if (empData.data.employee) {
        setEmpl(empData.data.employee);
      }
    } catch (error) {
      console.log(error.error);
    }
  };
  useEffect(() => {
    getEmployee();
  }, []);

  console.log("empleave", empLeave);
  console.log("empl", empl);

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
            {[...empLeave].map((emp) =>
              [...empl].map((emploee) => {
                if (emp.userEmail === emploee.email) {
                  return (
                    <tr>
                      <td>{emp.userName}</td>
                      <td>{emploee.role}</td>
                      <td>{emploee.managerName}</td>
                    </tr>
                  );
                }
              })
            )}
          </tbody>
        </table>

        <BarChart width={500} height={300} data={data}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Used" stackId="a" fill="#d261ff" />
          <Bar dataKey="Total" stackId="a" fill="#440263" />
        </BarChart>
      </div>

      <div className="list-items">
        <div className="card">
          <ul className="card-list">
            <h3 className="head">Upcoming Birthdays</h3>
            {bday.map((c) => {
              const {
                _id,
                firstName,
                lastName,
                email,
                pass,
                contact,
                role,
                doj,
                dob,
                gender,
                address,
                city,
                state,
                postal,
                mname,
                memail,
                rt,
              } = c;
              return (
                <>
                  <li key={_id}>
                    {dob.substring(8, 10) +
                      "-" +
                      dob.substring(5, 7) +
                      "-" +
                      dob.substring(0, 4)}{" "}
                    - {firstName + " " + lastName}
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="card">
          <ul className="card-list">
            <h3 className="head">Upcoming Holidays</h3>
            {list.map((c) => {
              const { _id, date, event } = c;
              return (
                <>
                  <li key={_id}>
                    {date.substring(8, 10) +
                      "-" +
                      date.substring(5, 7) +
                      "-" +
                      date.substring(0, 4)}{" "}
                    - {event}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Empholiday;
