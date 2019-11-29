const User = require("../model/user");

module.exports = {
  index
};

function index(req, res, next) {
  let sortKey = req.query.sort || "name";
  res.render("users/index", {
    title: "User page",
    user: req.user,
    name: req.query.name,
    sortKey
  });
  console.log(sortKey);
}
