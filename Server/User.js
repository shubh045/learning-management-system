const { Router } = require("express");
const Employee =  require('./models/employee');
const route  = Router();
const bcrypt = require("bcryptjs");

route.post("/login", async (req, res, next) => {
  try {
    console.log(`[login][body] ${JSON.stringify(req.body)}`);

    const { email, password } = req.body;

    if (!email) {
      return res.status(400).send({ message: "Email is required field" });
    }
    if (!password) {
      return res.status(400).send({ message: "Password is required filed" });
    }

    const user = await Employee.findOne({email})
    console.log("data", user)

    if (!user) {
      return res.status(400).send({ message: "user not found" });
    }
    // const match = bcrypt.compareSync(password, user.password)

    if (!match) {
      return res.status(400).send({ message: "Password is not correct" });
    }

    // if (password !== user.password) {
    //     return res.status(400).send({ message: "Password is not correct" });
    //   }

    const data = user.toJSON();
    delete data["password"]
    const payload = {
        message: "login successful",
        data: data
    }

    res.send({ ...payload });
  } catch (error) {
    console.log(`login error ${error}`);
    res.status(500).send({ messgae: error.message });
  }

  // if(!)
  //     .exec()
  //     .then(user => {
  //         if (user.length >= 1) {
  //             return res.status(409).json({
  //                 message: "Mail exists"
  //             });
  //         } else {
  //             bcrypt.hash(req.body.password, 10, (err, hash) => {
  //                 if (err) {
  //                     return res.status(500).json({
  //                         error: err
  //                     });
  //                 }
  //             });
  //         }

  //     });
});

module.exports = route;