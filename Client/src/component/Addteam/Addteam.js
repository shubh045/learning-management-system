import { useState } from "react";
import AddMemb from "./Addmemb";
import "./Addteam.css";
const Addteam = () => {
  const [state, setState] = useState(false);
  const [team, setTeam] = useState([]);

  let btnText = "Add Manager";
  const handleChange = (e) => {
    e.preventDefault();
    setState(!state);
  };

  if (state) {
    btnText = "Cancel";
  } else {
    btnText = "Add Manager";
  }

  const memberlist = (members) => {
    const newMembers = [...team, members];
    setTeam(newMembers);
  };

  return (
    <>
      <form>
        <div className="manager-info">
          <h3>Manager Details</h3>
          <div className="man-inf disp p-info">
            <div className="disp label-i manager-name">
              <label htmlFor="m-name">Name</label>
              <select id="m-name">
                <option value="select">Select</option>
                <option value="Manager1">Anuj Thakur</option>
                <option value="Manager2">Deepak Varna</option>
                <option value="Manager3">Gurinder Singh</option>
                <option value="Manager4">Akash Sharma</option>
              </select>
            </div>
            <div className="disp label-i manager-email">
              <label htmlFor="m-email">Email</label>
              <select id="m-email">
                <option value="select">Select</option>
                <option value="Manager1">anuj@gmail.com</option>
                <option value="Manager2">deepak@gmail.com</option>
                <option value="Manager3">gurinder@gmail.com</option>
                <option value="Manager4">akash@gmail.com</option>
              </select>
            </div>
          </div>
          <div className="btns">
            <button onClick={handleChange}>{btnText}</button>
          </div>
        </div>
        <AddMemb toggle={state} newMemb={memberlist} />
      </form>
    </>
  );
};

export default Addteam;
