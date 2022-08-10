const mongoose = require("mongoose");

const Employee = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password:{type:String,required:true},
    contactNumber: { type: Number, require: true, unique: true },
    role: { type: String, require: true },
    joining: { type: Date, require: true },
    dob: { type: Date, require: true },
    gender: { type: String, require: true },
    address: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    postalCode: { type: Number, require: true },
    managerName: { type: String, }, // TODO Fix this
    managerEmail:{type:String,},
    refreshToken: {type: String},
  },
  { collation: {locale: 'en_US', strength: 1} },
);


//Remove refreshToken from the response
Employee.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.refreshToken
    delete ret.password
    return ret
  },
})

module.exports = mongoose.model("Employee", Employee);

