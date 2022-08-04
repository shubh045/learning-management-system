const mongoose = require("mongoose");

const apllyLeave = new mongoose.Schema(
  {
    Type_of_Leave: { type: String, required: true },
    From_Date: { type: Date, required: true },
    To_Date: { type: Date, required: true },
    subject: { type: String, required: true },
    discription: { type: String, required: true }
  },
  { collation: "leave" }
);

const LeaveApply = mongoose.model("leave", leave);
module.exports = LeaveApply;
