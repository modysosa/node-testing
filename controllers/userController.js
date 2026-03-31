const User = require("../models/customerSchema");
var moment = require("moment");
const countries = require("../public/data/countries");

user_index_get = (req, res) => {
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
};

user_edit_get = (req, res) => {
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
};

user_view_get = (reqqqq, res) => {
  User.findById(reqqqq.params.id)
    .then((result) => {
      // console.log(result);
      res.render("user/view", { user: result, mm: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

user_search_post = (req, res) => {
  const searchText = req.body.search.trim();

  User.find({
    $or: [
      { firstName: { $regex: searchText, $options: "i" } },
      { lastName: { $regex: searchText, $options: "i" } },
    ],
  })
    .then((result) => {
      res.render("user/search", {
        obj: result,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Server error");
    });
};

user_delete = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    // User.deleteOne({_id:req.params.id})
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

user_put = (req, res) => {
  // User.updateOne({ _id: req.params.id }, req.body)
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      // console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

user_add_get = (req, res) => {
  res.render("user/add", { countries: countries });
};

user_addHome_get = (req, res) => {
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
};

module.exports = {
  user_index_get,
  user_edit_get,
  user_view_get,
  user_search_post,
  user_delete,
  user_put,
  user_add_get,
  user_addHome_get,
};
