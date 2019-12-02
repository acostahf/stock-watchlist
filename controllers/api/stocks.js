var Stock = require("../../model/stock");

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne
};

function deleteOne(req, res) {
  Stock.findByIdAndDelete(req.params.id, function(err, stock) {
    res.redirect("/stocks");
  });
}

function update(req, res) {
  Stock.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    updatedStock
  ) {
    res.status(200).json(updatedStock);
  });
}

function show(req, res) {
  Stock.findById(req.params.id, function(err, stock) {
    res.status(200).json(stock);
  });
}

function index(req, res) {
  Stock.find({}, function(err, stocks) {
    res.status(200).json(stocks);
  });
}

function create(req, res) {
  Stock.create(req.body, function(err, stocks) {
    if (err) {
      return res.status(400).json(err);
    } else {
      return res.status(201).json(stocks);
    }
  });
}