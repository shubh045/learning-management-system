const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const LeaveApply = require("./models/leaveapply")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

const dbUrl =
  "";
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


app.listen(3200, "127.0.0.2");
console.log("Node server running on port 3200");

app.post("/api/leaveapply", async (req, res) => {
  console.log(req.body);
  try {
    const {
    Type_of_Leave,
    From_Date,
    To_Date,
    subject,
    discription
    } = req.body;
    const leave = new LeaveApply({
    Type_of_Leave,
    From_Date,
    To_Date,
    subject,
    discription
    });

    await leave.save();

    res.status(200).json({
      status: "200",
      message: "Employee register successfully",
    });
  } catch (err) {
    res.json({ status: "error", error: err.message });
  }
});
