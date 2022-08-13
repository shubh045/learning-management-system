
const mongoose = require("mongoose"); 

const applyLeave = new mongoose.Schema(
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
    managerEmail: { type: Array},
  },
  { collation: {locale: "en_US", strength: 1} }
);

const leaveApply = mongoose.model("leave", applyLeave);
module.exports = leaveApply;
