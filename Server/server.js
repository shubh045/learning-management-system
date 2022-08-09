const express = require("express");
const Login = require("./routes/login");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const addEmailRoute = require("./routes/addEmploye");
const Role = require("./models/role");
const cookieParser = require("cookie-parser");
const session = require('cookie-session');
const passport = require("passport");

const Employee = require("./models/employee")

require("./strategies/jwtStrategy")
require("./strategies/localStrategy")
require("./strategies/authenticate")


const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(session({keys: ['secretkey1', 'secretkey2']}));

const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : []

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },

  credentials: true,
}

app.use(cors(corsOptions))
app.use(passport.initialize())
app.use(passport.session());


const dbUrl =
  process.env.MONGO_DB_CONNECTION_STRING;
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

// Api routes
// app.use(login)
// app.midelerware
app.use(addEmailRoute);
app.use(Login);

app.listen(3100, "127.0.0.1");
console.log("Node server running on port 3100");

app.post("/user", async (req, res) => {
  Employee.register(new Employee({email: req.body.email})),
  req.body.password, 
  (err, emp) => {
    if(err){
      res.statusCode = 500
      res.send(err)
    } else {
      emp.firstName = "anuj"
      emp.lastName = "thakur"
      emp.contactNumber="76899900"
      emp.role= "principal-engineer"
      emp.joining = "26"
      emp.dob = "260"
      emp.gender = "m"
      emp.address="chandigarh"
      emp.city="chandigarh"
      emp.state="chandigarh"
      emp.postalCode="111222"
      emp.save((err, user) => {
        if(err){
          res.statusCode = 500
          res.send(err)
        } else {
          res.send({
            success: true,
            user: user
          })
        }
      })
    }
  }
})

app.get("/api/managerlist");
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

app.get("/api/roleList", async (req, res) => {
  Role.find()
    .then((result) => {
      res.status(200).json({
        roleData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
