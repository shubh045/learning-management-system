const express = require("express");
const bcrypt = require("bcryptjs");
const addEmployeeEmail = require("../emails/addEmployeEmail");
const Employee = require("../models/employee");

const { sendEmail } = require("../emailService");

const generator = require("generate-password");
const { SuccessObj } = require("./responseMethod");
const Router = express.Router();

Router.get("/api/addEmp", async (req, res) => {
  Employee.find().then((result) => {
    res.status(200).json({
      employee: result,
    });
  });
});

Router.post("/api/addEmployee", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      contactNumber,
      role,
      joining,
      dob,
      gender,
      address,
      city,
      state,
      postalCode,
      managerName,
      managerEmail,
    } = req.body;

    password = generator.generate({
      length: 12,
      numbers: true,
    });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const employee = new Employee({
      firstName,
      lastName,
      email,
      password: hashPassword,
      contactNumber,
      role,
      joining,
      dob,
      gender,
      address,
      city,
      state,
      postalCode,
      managerName,
      managerEmail,
    });

    await employee.save();

    const mailOptions = {
      to: email,
      subject: "Welcome in LMS8",
      html: addEmployeeEmail(firstName, password),
    };

    await sendEmail(mailOptions);

    const data = new SuccessObj();
    data.message = "Register successfuly";

    res.status(201).json({ ...data });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err.message });
  }
});

module.exports = Router;
