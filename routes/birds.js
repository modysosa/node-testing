const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require("moment");

const Usercontrollers = require("../controllers/userController");

////////////////////////// Get Requst /////////////////////////////////////////////////////

router.get("/", Usercontrollers.user_index_get);

router.get("/edit/:id", Usercontrollers.user_edit_get);

router.get("/view/:id", Usercontrollers.user_findID_get);

////////////////////////////Post Requst/////////////////////////////

router.post("/user/search.html", Usercontrollers.user_search_post);

//////// DELETE  //////////////////////

router.delete("/edit/:id", Usercontrollers.user_delete);

//////// PUT  //////////////////////

router.put("/edit/:id", Usercontrollers.user_edit);

module.exports = router;
