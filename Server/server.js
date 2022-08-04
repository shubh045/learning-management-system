const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Employee = require("./models/employee");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

const dbUrl =
  "mongodb+srv://Admin:VIPZb498zKAImRYQ@cluster0.zvzw94r.mongodb.net/?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
};

mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.info("connectd to DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });


app.listen(3100, "127.0.0.1");
console.log("Node server running on port 3100");

app.post("/api/addEmployee", async (req, res) => {
  console.log(req.body);
  try {
    const {
      First_Name,
      Last_Name,
      email,
      contact_number,
      role,
      joining,
      dob,
      gender,
      address,
      city,
      state,
      postal_code,
      manager_Name,
      manager_email
    } = req.body;
    const employee = new Employee({
      First_Name,
      Last_Name,
      email,
      contact_number,
      role,
      joining,
      dob,
      gender,
      address,
      city,
      state,
      postal_code,
      manager_Name,
      manager_email,
    });

    await employee.save();

    res.status(200).json({
      status: "200",
      message: "Employee register successfully",
    });
  } catch (err) {
    res.json({ status: "error", error: err.message });
  }
});
