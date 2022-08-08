const mongoose = require("mongoose");

const role = new mongoose.Schema(
  {
    designation:{type:String, require:true}
  },
  { collation: {locale: "en_US", strength: 1} }
);

const Role = mongoose.model("role", role);

module.exports = Role;
