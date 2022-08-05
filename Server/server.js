const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const addEmailRoute = require("./routes/addEmploye");
const Role = require("./models/role");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }))
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

  // Api routes
  // app.use(login)
  // app.midelerware
  app.use(addEmailRoute)

app.listen(3100, "127.0.0.1");
console.log("Node server running on port 3100");


app.get("/api/managerlist")


app.post("/api/addRole", async (req, res) => {
  console.log(req.body);
  try {
    const { designation } = req.body;
    const role = new Role({
      designation,
    });

    await role.save();

    res.status(200).json({
      status: "200",
      message: "designation added sucessfully",
    });
  } catch (err) {
    res.json({ status: "error", error: err.message });
  }
});



app.get("/api/roleList",async (req, res) =>{
   Role.find()
 .then(result=>{
   res.status(200).json({
     roleData:result
   });
 })
 .catch(err=>{
   console.log(err);
   res.status(500).json({
     error:err
   })
 })
})