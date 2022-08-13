
const mongoose = require("mongoose")

const holidaySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    // unique:true,
  },
  event: {
    type: String,
    required: true, 
  },
})

const Holiday = mongoose.model("Holiday", holidaySchema) 

module.exports = Holiday

