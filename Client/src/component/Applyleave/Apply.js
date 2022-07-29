import React from "react";
import './Apply.css';

function Apply() {

  return (
    <>

      <div className="main">
      <select name="Type of Leave" class="Leave">
            <option disabled value="Type of Leave">Type of Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Paid Leave">Paid Leave</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Maternity Leave">Maternity Leave</option>
          </select>
        
        <div className="date">
          <label htmlFor="From">From</label><input type="date" />
          <label htmlFor="To">To</label><input type="date" />
        </div>

        <input type="text" className="subject" placeholder="Subject" />
        <input type="text" className="description" placeholder="Description" />
        <div className="btn">
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
}

export default Apply;