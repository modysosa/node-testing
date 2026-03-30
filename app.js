require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/customerSchema");
var moment = require("moment");
var methodOverride = require("method-override");
const countries = require("./public/data/countries");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

////////////////////////// Get Requst /////////////////////////////////////////////////////

app.get("/", (req, res) => {
  User.find()
    .then((result) => {
      res.render("index", {
        mytitle: "Home Page",
        users: result,
        mm: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/edit/:id", (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      if (!result) {
        return res.status(404).send("User not found");
      }

      return res.render("user/edit", {
        user: result,
        moment: moment,
        countries: countries,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send("Server error");
    });
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add", { countries: countries });
});

app.get("/view/:id", (reqqqq, res) => {
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
  // const user = new User(req.body);
  // console.log(req.body);
  // user.save()

  User.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

//////// DELETE  //////////////////////

app.delete("/edit/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    // User.deleteOne({_id:req.params.id})
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

//////// PUT  //////////////////////

app.put("/edit/:id", (req, res) => {
  // User.updateOne({ _id: req.params.id }, req.body)
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      console.log(result);
      res.redirect("/");
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
