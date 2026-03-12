require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const Mydata1 = require("./models/schema-structure");

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

app.get("/index.html", (req, res) => {
  res.send("<h1>Data Saved Successfully... </h1>");
});

// mongoose
//   .connect(
//     "llllllllllllllllllllllllink",
//   )
//   .then(() => {})
//   .catch(() => {});
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

app.post("/", (req, res) => {
  // console.log(req.body);
  // res.redirect("/");
  console.log(req.body);

  const mydata = new Mydata1(req.body);
  mydata
    .save()
    .then(() => {
      res.redirect("/index.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
