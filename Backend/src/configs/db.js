const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://prem:prem@cluster0.fkthv.mongodb.net/property"
  )
};