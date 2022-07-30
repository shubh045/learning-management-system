import "./AddEmployee.css";
import { useState } from "react";
const Addemp = () => {

  return (
    <>
      <section className="disp add-emp">
        <div className="cont">
          <div className="in-cont">
            <h2>Employee Details</h2>
            <div>
              <form>
                <div className="disp name">
                  <div className="disp f-name label-i">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      id="fname"
                    />
                  </div>
                  <div className="disp l-name label-i">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter Last name"
                      id="lname"
                    />
                  </div>
                </div>
                <div className="disp contact">
                  <div className="e-mail disp label-i">
                    <label htmlFor="e-mail">Email</label>
                    <input type="text" placeholder="Enter email" id="e-mail" />
                  </div>
                  <div className="phone disp label-i">
                    <label htmlFor="phone">Contact Number</label>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="Enter Contact no."
                      id="phone"
                    />
                  </div>
                </div>
                <div className="disp p-info">
                  <div className="role disp label-i">
                    <label htmlFor="role">Role</label>
                    <input type="text" placeholder="Enter Role" id="role" />
                  </div>
                  <div className="doj disp label-i">
                    <label htmlFor="doj">Joining Date</label>
                    <input
                      type="date"
                      placeholder="Enter Joining date"
                      id="doj"
                    />
                  </div>
                </div>
                <div className="disp gender">
                  <div className="dob disp label-i">
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" placeholder="Enter DOB" id="dob" />
                  </div>
                  <div className="gend disp label-i">
                    <h4>Gender</h4>
                    <div className="disp gen">
                      <div className="disp male">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          id="male"
                        />
                        <label htmlFor="male">Male</label>
                      </div>
                      <div className="disp female">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          id="female"
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                      <div className="disp others">
                        <input
                          type="radio"
                          name="gender"
                          value="others"
                          id="others"
                        />
                        <label htmlFor="others">Others</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="address disp label-i">
                  <h4>Address</h4>
                  <div className="addrs1 disp label-i">
                    <label htmlFor="addrs1">Address Line 1</label>
                    <input type="text" />
                  </div>
                  <div className="addrs2 disp">
                    <div className="city disp label-i">
                      <label htmlFor="city">City</label>
                      <input type="text" id="city" />
                    </div>
                    <div className="state disp label-i">
                      <label htmlFor="state">State</label>
                      <input type="text" id="state" />
                    </div>
                  </div>

                  <div className="pinc disp label-i">
                    <label htmlFor="pinc">Postal code</label>
                    <input type="number" id="pinc" />
                  </div>
                </div>
                <div className="r-manager">
                  <h2>Reporting Manager</h2>
                  <div className="disp name">
                    <div className="disp f-name label-i">
                      <label htmlFor="mname">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        id="mname"
                      />
                    </div>
                    <div className="e-mail disp label-i">
                      <label htmlFor="me-mail">Email</label>
                      <input
                        type="text"
                        placeholder="Enter email"
                        id="me-mail"
                      />
                    </div>
                  </div>
                </div>
                <div className="btns">
                  <button type="submit" className="btn-add">
                    Add
                  </button>
                  <button type="reset" className="btn-res">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Addemp;
