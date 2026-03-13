// require("dotenv").config();
// const express = require("express");
// const app = express();
// const port = 3000;
// const mongoose = require("mongoose");
// app.use(express.urlencoded({ extended: true }));
// const Mydata1 = require("./models/schema-structure");
// app.set("view engine", "ejs");
// app.use(express.static("public"));

// // auto refresh  ////////////////////////////////
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, "public"));

// const connectlivereload = require("connect-livereload");
// app.use(connectlivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });
// //////////////////////////////////////////////////

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Mydata1 = require("./models/schema-structure");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { mytitle: "Home Page" });
});

//   Mydata1.find()
//     .then((resulteee) => {
//       res.render("index", { mytitle: "Home Page", meme: resulteee });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send("Database error");
//     });
// });

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});

app.get("/user/view.html", (req, res) => {
  res.render("user/view");
});

app.get("/user/edit.html", (req, res) => {
  res.render("user/edit");
});

// app.post("/", (req, res) => {
//   // console.log(req.body);
//   // res.redirect("/");
//   console.log(req.body);

//   const mydata = new Mydata1(req.body);
//   mydata
//     .save()
//     .then(() => {
//       res.redirect("/index.html");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send("Failed to save data");
//     });
// });

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
