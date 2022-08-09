const { Router } = require("express");
const Employee = require("../models/employee");
const route = Router();
const bcrypt = require("bcryptjs");
const passport = require("passport")

const {
  getToken,
  COOKIE_OPTIONS,
  getRefreshToken,
} = require("../strategies/authenticate");

// ...

route.post("/login", passport.authenticate("local"), async (req, res, next) => {
  try {
    conssole.log("body", req)
    const { email, password } = req.body;
    const token = getToken({ email: email });
    const refreshToken = getRefreshToken({ email: email });
    console.log(`[login][body] ${JSON.stringify(req.body)}`);

    

    if (!email) {
      return res.status(400).send({ message: "Email is required field" });
    }
    if (!password) {
      return res.status(400).send({ message: "Password is required filed" });
    }

    const user = await Employee.findOne({ email });
    console.log("data", user);

    if (!user) {
      return res.status(400).send({ message: "user not found" });
    }

    if (!match) {
      return res.status(400).send({ message: "Password is not correct" });
    }

    const data = user.toJSON();
    delete data["password"];
    const payload = {
      message: "login successful",
      data: data,
    };

    res.send({ ...payload });
  } catch (error) {
    console.log(`login error ${error}`);
    res.status(500).send({ messgae: error.message });
  }
});

module.exports = route;
