const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require("moment");
const countries = require("../public/data/countries");
const Usercontrollers = require("../controllers/userController");

router.get("/add.html", Usercontrollers.user_add_get);
router.post("/add.html", Usercontrollers.user_addHome_get);

module.exports = router;
