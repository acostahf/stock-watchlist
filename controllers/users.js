const User = require("../model/user");

module.exports = {
  index,
  new: newStock,
  create,
  show
};

//stock has to match with the show stock. ect.
function show(req, res) {
  Stock.findById(req.params.id, function(err, stock) {
    res.render("stocks/show", { title: "stock Detail", user: "d", stock });
  });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  let stock = new Stock(req.body);
  req.stock.user.push(stock._id);
  stock.save(function(err) {
    if (err) return res.send(err);

    res.redirect(`/users`);
  });
}

function newStock(req, res) {
  User.findById(req.params.id, function(err, stock) {
    res.render("users/new", { title: "Add stocks", user: "d", stock });
  });
}

function index(req, res, next) {
  User.findById(req.user._id)
    .populate("stocks")
    .exec(function(err, user) {
      res.render("users", {
        title: "User page",
        user: req.user,
        stocks: user.stock
      });
    });
}
