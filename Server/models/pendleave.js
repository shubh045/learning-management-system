const mongoose = require("mongoose");

const leavePend = new mongoose.Schema(
  {
    userEmail: {type: String},
    userName: {type: String},
    status: {type: String},
    dateApplied: {type: Date},
    leaveType: { type: String, required: true },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true }, 
  },
  { collation: "pendingleave" }
); 

const pendLeave = mongoose.model("pendingleave", leavePend);
module.exports = pendLeave;
