const mongoose = require("mongoose");

const employee = new mongoose.Schema(
  {
    First_Name: { type: String, required: true },
    Last_Name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact_number: { type: Number, require: true, unique: true },
    role: { type: String, require: true },
    joining: { type: Date, require: true },
    dob: { type: Date, require: true },
    gender: { type: String, require: true },
    address: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    postal_code: { type: Number, require: true },
    manager_Name: { type: String, required: true },
    manager_email:{type:String, required:true}
  },
  { collation: "employee" }
);

const Employee = mongoose.model("Employee", employee);
module.exports = Employee;
