const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define Schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  telephone: String,
  age: Number,
  country: String,
  gender: String,
});

// Create Model based on that DataSchema
const User = mongoose.model("customer", userSchema);

module.exports = User;
