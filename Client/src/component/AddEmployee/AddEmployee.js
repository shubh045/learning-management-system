import "./AddEmployee.css";
import React from 'react'
import { useState } from "react";
import axios from "axios"



const Addemp = () => {

  const [state, setState] = useState({
    First_Name:"",
      Last_Name:"",
      email:"",
      contact_number:"",
      role:"",
      joining:"",
      dob:"",
      gender:"",
      address:"",
      city:"",
      state:"",
      postal_code:"",
      manager_Name:"",
      manager_email:"",
  })

  const [errorMessage, setErrorMessage] = useState("")
  const [result, setResult] = useState("");

  const changeHandler = (event) => {
    const {name, value} = event.target;
    setState({
      ...state,
      [name]: value
    })
  } 

  const submitHandler = async () => {
    try {
      setResult("")
      setErrorMessage("")
      const data = await axios.post("http://localhost:3100/api/addEmployee", {...state})
      console.log(data)
      if(!data.data.error) {
        setResult(data.data.message)
      } else {
        setErrorMessage(data.data.error)
      }
    } catch(error){
      console.log(error)
      setErrorMessage(error.error)
    }
    
  }


  
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
                    <input onChange={changeHandler} name="First_Name"
                      type="text"
                      placeholder="Enter first name"
                      id="fname"
                    />
                  </div>
                  <div className="disp l-name label-i">
                    <label htmlFor="lname">Last Name</label>
                    <input onChange={changeHandler} name="Last_Name"
                      type="text"
                      placeholder="Enter Last name"
                      id="lname"
                    />
                  </div>
                </div>
                <div className="disp contact">
                  <div className="e-mail disp label-i">
                    <label htmlFor="e-mail">Email</label>
                    <input onChange={changeHandler} name="email" type="text" placeholder="Enter email" id="e-mail" />
                  </div>
                  <div className="phone disp label-i">
                    <label htmlFor="phone">Contact Number</label>
                    <input onChange={changeHandler} name="contact_number"
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
                    <input onChange={changeHandler} name="role" type="text" placeholder="Enter Role" id="role" />
                  </div>
                  <div className="doj disp label-i">
                    <label htmlFor="doj">Joining Date</label>
                    <input onChange={changeHandler} name="joining"
                      type="date"
                      placeholder="Enter Joining date"
                      id="doj"
                    />
                  </div>
                </div>
                <div className="disp gender">
                  <div className="dob disp label-i">
                    <label htmlFor="dob">Date of birth</label>
                    <input onChange={changeHandler} name="dob" type="date" placeholder="Enter DOB" id="dob" />
                  </div>
                  <div className="gend disp label-i">
                    <h4>Gender</h4>
                    <div className="disp gen">
                      <div className="disp male">
                        <input onChange={changeHandler} 
                          type="radio"
                          name="gender"
                          value="male"
                          id="male"
                        />
                        <label htmlFor="male">Male</label>
                      </div>
                      <div className="disp female">
                        <input onChange={changeHandler} 
                          type="radio"
                          name="gender"
                          value="female"
                          id="female"
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                      <div className="disp others">
                        <input onChange={changeHandler}
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
                    <input onChange={changeHandler} name="address" type="text" />
                  </div>
                  <div className="addrs2 disp">
                    <div className="city disp label-i">
                      <label htmlFor="city">City</label>
                      <input onChange={changeHandler} name="city" type="text" id="city" />
                    </div>
                    <div className="state disp label-i">
                      <label htmlFor="state">State</label>
                      <input onChange={changeHandler} name="state" type="text" id="state" />
                    </div>
                  </div>

                  <div className="pinc disp label-i">
                    <label htmlFor="pinc">Postal code</label>
                    <input onChange={changeHandler} name="postal_code" type="number" id="pinc" />
                  </div>
                </div>
                <div className="r-manager">
                  <h2>Reporting Manager</h2>
                  <div className="disp name">
                    <div className="disp f-name label-i">
                      <label htmlFor="mname">Full Name</label>
                      <input onChange={changeHandler} name="manager_Name"
                        type="text"
                        placeholder="Enter full name"
                        id="mname"
                      />
                    </div>
                    <div className="e-mail disp label-i">
                      <label htmlFor="me-mail">Email</label>
                      <input onChange={changeHandler} name="manager_email"
                        type="text"
                        placeholder="Enter email"
                        id="me-mail"
                      />
                    </div>
                  </div>
                </div>
                <div className="btns">
                  <button  onClick={submitHandler} className="btn-add">
                    Add
                  </button>
                  {errorMessage && <p style={{background: "red", padding: "10px", color: "#fff", maxWidth:"500px"}}>{errorMessage}</p>}
    {result && <p style={{background: "green", padding: "10px", color: "#fff"}}>{result}</p>}
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
