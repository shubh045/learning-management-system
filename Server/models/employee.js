const mongoose = require("mongoose");

const employee = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password:{type:String,required:true},
    contactNumber: { type: Number, require: true, unique: true },
    role: { type: String, require: true },
    joining: { type: Date, require: true },
    dob: { type: Date, require: true },
    gender: { type: String, require: true },
    address: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    postalCode: { type: Number, require: true },
    managerName: { type: String, required: true },
    managerEmail:{type:String, required:true}
  },
  { collation: {locale: 'en_US', strength: 1} },
);

const Employee = mongoose.model("Employee", employee);
module.exports = Employee;
