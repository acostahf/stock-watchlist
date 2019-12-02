var Stock = require("../model/stock");

module.exports = {
  index,
  show,
  new: newStock,
  create
};

function index(req, res) {
  Stock.find({}, function(err, stocks) {
    res.render("stocks", {
      title: "Stock quotes",
      user: "d",
      stocks
    });
  });
}

//stock has to match with the show stock.airline ect.
function show(req, res) {
  Stock.findById(req.params.id, function(err, stock) {
    res.render("stocks/show", { title: "stock Detail", stock });
  });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  let stock = new Stock(req.body);
  stock.save(function(err) {
    if (err) return res.send(err);

    res.redirect(`/stocks`);
  });
}

function newStock(req, res) {
  Stock.findById(req.params.id, function(err, stock) {
    res.render("stocks/new", { title: "Add stocks", stock });
  });
}
