const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Schema (the structure of the article)
const articleSchema = new Schema({
  usernameee: String,
});

// Create a model based on that schema
const Mydata1 = mongoose.model("Mydataa2", articleSchema);

// export the model
module.exports = Mydata1;
