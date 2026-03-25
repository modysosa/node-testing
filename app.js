require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/customerSchema");
var moment = require("moment");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

////////////////////////// Get Requst /////////////////////////////////////////////////////

app.get("/", (req, res) => {
  User.find()
    .then((result) => {
      res.render("index", { mytitle: "Home Page", users: result, mm: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});

app.get("/user/edit.html", (req, res) => {
  res.render("user/edit");
});

app.get("/user/user/add.html", (req, res) => {
  res.render("user/add");
});

app.get("/user/:id", (reqqqq, res) => {
  User.findById(reqqqq.params.id)
    .then((result) => {
      console.log(result);
      res.render("user/view", { user: result, mm: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

////////////////////////////Post Requst/////////////////////////////
app.post("/user/add.html", (req, res) => {
  const user = new User(req.body);
  // console.log(req.body);
  user
    .save()
    .then(() => {
      res.redirect("/user/add.html");
    })
    .catch((err) => {
      console.log(err);
    });
});

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
