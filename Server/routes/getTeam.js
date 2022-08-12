const { Router } = require("express");
const Employee = require("../models/employee");
const route = Router();
const { SuccessObj } = require("./responseMethod");
const {
  accessTokenGenerator,
  refreshTokenGenerator,
  jwtValidator,
} = require("../jwtValidator");

const { ErrorObj } = require("../handleErrorMiddlerware");

route.get("/team/getall", async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.send(employees);
  } catch (error) {
    console.log(error);
    next(error);
  }
});



module.exports = route;