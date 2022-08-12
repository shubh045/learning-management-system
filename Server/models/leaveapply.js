const mongoose = require("mongoose");

const applyLeave = new mongoose.Schema(
  {
    dateApplied: {type: Date},
    leaveType: { type: String, required: true },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    managerEmail: { type: String}
  },
  { collation: {locale: "en_US", strength: 1} }
);

const leaveApply = mongoose.model("leave", applyLeave);
module.exports = leaveApply;
