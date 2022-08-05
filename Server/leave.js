const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const LeaveApply = require("./models/leaveapply");
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
    console.info("connected to DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

app.listen(3200, "127.0.0.1");
console.log("Node server running on port 3200");

app.post("/api/leaveapply", async (req, res) => {
  console.log(req.body);
  try {
    const { dateApplied, leaveType, fromDate, toDate, subject, description } =
      req.body;
    const leave = new LeaveApply({
      dateApplied,
      leaveType,
      fromDate,
      toDate,
      subject,
      description,
    });

    await leave.save();

    res.status(210).json({
      status: "210",
      message: "Leave sent successfully",
    });
  } catch (err) {
    res.json({ status: "error", error: err.message });
  }
});
