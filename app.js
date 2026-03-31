require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

var methodOverride = require("method-override");
const birds = require("./routes/birds");
const addUser = require("./routes/addUser");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(birds);
app.use("/user", addUser);

mongoose
  .connect(process.env.MONGO_URI)
  // ----/all-data?----
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
