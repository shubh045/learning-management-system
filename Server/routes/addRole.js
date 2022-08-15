const express = require("express");
const bcrypt = require("bcryptjs");
const Role = require("../models/role");

const Router = express.Router();

Router.post("/api/addRole", async (req, res) => {
  try {
    const {role } = req.body;

    // const role = new Role({
    //   role,
    // });

    await role.save();

    res.status(200).json({
      status: "200",
      message: "Role added successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err.message });
  }
});

module.exports = Router;
