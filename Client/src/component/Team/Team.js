import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axios";

import "./Teams.css";

function Team() {
  const [teamMember, changeTeamMember] = useState([]);
  
  useEffect(() => {
    axiosInstance
      .get("team/getall")
      .then((response) => {
        changeTeamMember(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="teams">
      <table className="table">
        <thead className="holilisth">
          <tr>
            <th id="id2">Employee Name</th>
            <th id="id1">Role</th>
          </tr>
        </thead>
        <tbody>
          {teamMember.map((member) => (
            <>
              <tr key={member._id}>
                  <td>{member.firstName + " " + member.lastName}</td>

                <td>{member.role}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Team;