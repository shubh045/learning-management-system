const express = require("express");
const Login = require("./routes/login");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { handleError } = require("./handleErrorMiddlerware");

const jwt = require("jsonwebtoken");
const addEmployeRoute = require("./routes/addEmploye");
const sendLeave = require("./routes/sendLeave");
const Role = require("./models/role");
const cookieParser = require("cookie-parser");

const Employee = require("./models/employee")
const Holiday= require("./models/holiday") 


const app = express();

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
  exposedHeaders: ["set-cookie"],
}
app.use(cors(corsOptions))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());
// app.use(session({keys: ['secretkey1', 'secretkey2']}));






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




app.use(Login);
app.use(addEmployeRoute);
app.use(sendLeave);

app.listen(3100, "127.0.0.1");
console.log("Node server running on port 3100");


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

function success(res, payload) {
  return res.status(200).json(payload)
}

app.get("/holiday", async (req, res, next) => {
  try {
    const holi = await Holiday.find()
    return success(res, holi)
  } catch (err) {
    next({ status: 400, message: "failed to get list of holidays" })
  }
})

app.get("/holiday/:id", async (req, res, next) => {
  try {
    const holi = await Holiday.findById(req.params.id)
    return success(res, holi)
  } catch (err) {
    next({ status: 400, message: "failed to get list of holidays" })
  }
})

app.post("/holiday", async (req, res, next) => {
  try {
    const {
      date,
      event
    }=req.body;
    const holi=new Holiday({
      date,
      event
    });
    
    await holi.save();
    return success(res, holi)
  } catch (err) {
    next({ status: 400, message: "failed to create new holiday" })
  }
})

app.put("/holiday/:id", async (req, res, next) => {
  try {
    const holi = await Holiday.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    return success(res, holi)
  } catch (err) {
    next({ status: 400, message: "failed to update" })
  }
})
app.delete("/holiday/:id", async (req, res, next) => {
  try {
    await Holiday.findByIdAndRemove(req.params.id)
    return success(res, "Holiday deleted!")
  } catch (err) {
    next({ status: 400, message: "failed to delete" })
  }
})

app.use(handleError);