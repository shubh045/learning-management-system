const { Router } = require("express");
const Employee = require("../models/employee");
const route = Router();
const bcrypt = require("bcryptjs");
const { SuccessObj } = require("./responseMethod");

const {
  accessTokenGenerator,
  refreshTokenGenerator,
  jwtValidator,
} = require("../jwtValidator");
const { ErrorObj } = require("../handleErrorMiddlerware");

route.post("/login", async (req, res, next) => {
  try {
    /*
         @parms email, password
    */

    const { email, password } = req.body;
    // validate email and password required
    if (!email) {
      const error = new ErrorObj(400, "Email is required");
      next(error);
      return;
    }
    if (!password) {
      const error = new ErrorObj(400, "Password is required");
      next(error);
      return;
    }
    // validate email and password with database
    const employe = await Employee.findOne({ email });

    if (!employe) {
      const error = new ErrorObj(400, "Email is wrong");
      next(error);
      return;
    }
    // check password
    const validatePassword = await bcrypt.compare(password, employe.password);
    if (!validatePassword) {
      const error = new ErrorObj(400, "Password is wrong");
      next(error);
      return;
    }
    // generate jwt token
    const jwtPayload = {
      firstName: employe.firstName,
      email: employe.email,
      role: employe.role,
      id: employe?._id,
    };
    const accessToken = accessTokenGenerator(jwtPayload);
    const refreshToken = refreshTokenGenerator(jwtPayload);

    employe.refreshToken = refreshToken;
    await employe.save();

    const data = new SuccessObj();
    data.token = accessToken;

    data.payload = {
      user: employe.toJSON(),
    };
    req.user = { ...jwtPayload };
    res
      .cookie("userId", `${employe._id}`, {
        httpOnly: true,
        secure: true,
        maxAge: 86400,
      })
      .cookie("jwt", accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 86400,
      })
      .json({ ...data });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

route.get("/profile", jwtValidator, async (req, res, next) => {
  try {
    const user = await Employee.findById(req.user.id);
    const data = new SuccessObj();

    data.payload = {
      user: user.toJSON(),
    };
    res.json({ ...data });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

route.post("/logout", jwtValidator, async (req, res, next) => {
  try {
    const user = await Employee.findById(req.user.id);
    if (user) {
      user.refreshToken = "";
      await user.save();
    }
    const data = new SuccessObj();
    res
      .clearCookie("userId")
      .clearCookie("jwt")
      .json({ ...data });
  } catch (err) {
    next(err);
  }
});

module.exports = route;
