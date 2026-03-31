const express = require("express");
const router = express.Router();
// const User = require("../models/customerSchema");

const Usercontrollers = require("../controllers/userController");

router.get("/", Usercontrollers.user_index_get);

router.get("/edit/:id", Usercontrollers.user_edit_get);

router.get("/view/:id", Usercontrollers.user_view_get);

router.post("/user/search.html", Usercontrollers.user_search_post);

router.delete("/edit/:id", Usercontrollers.user_delete);

router.put("/edit/:id", Usercontrollers.user_put);

module.exports = router;
