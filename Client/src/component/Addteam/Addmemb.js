
import { useState } from "react";

const AddMemb = (props) => {

    const [info, setInfo] = useState({name: "", email: "", role: ""});

    const infoHandler = (e) => {
        let key = e.target.name;
        setInfo(prev => ({...prev, [key]: e.target.value}))
    }

    

  if (props.toggle === true) {
    return (
      <div className="member-info">
        <h3>Member Details</h3>
        <div className="p-info">
          <div>
            <label htmlFor="e-name">Name</label>
            <input type="text" id="e-name" name="name" value={info.name} onChange={infoHandler} />
          </div>
          <div>
            <label htmlFor="e-email">Email</label>
            <input type="email" id="e-email" name="email" value={info.email} onChange={infoHandler} />
          </div>
        </div>
        <div>
          <label htmlFor="e-role">Role</label>
          <input type="text" id="e-role" name="role" value={info.role} onChange={infoHandler} />
        </div>
        <div className="btns">
          <button type="submit">Add Member</button>
          <button type="reset">Cancel</button>
        </div>
      </div>
    );
  }
};

export default AddMemb;
