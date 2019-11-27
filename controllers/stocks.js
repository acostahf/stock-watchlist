var Stock = require("../model/stock");

module.exports = {
  index
};

function index(req, res, next) {
  res.render("/index", { user: req.user });
}
