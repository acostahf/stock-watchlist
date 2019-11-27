const User = require("../model/user");

module.exports = {
  index
};

function index(req, res, next) {
  res.render("users/index", {
    title: "User page",
    user: req.user
  });
}
