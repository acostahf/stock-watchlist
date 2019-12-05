const Trader = require("../model/trader");

module.exports = {
  index,
  // delStock,
  addStock,
  delStock
};

function index(req, res, next) {
  console.log(req.query);
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  // Default to sorting by name
  let sortKey = req.query.sort || "name";
  Trader.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, traders) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render("traders/index", {
        traders,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
}

function addStock(req, res, next) {
  req.user.stocks.push(req.body);
  req.user.save(function (err) {
    res.redirect("/traders");
  });
}
function delStock(req, res, next) {
  Trader.findOne({ 'stocks._id': req.params.id }, function (err, trader) {
    trader.stocks.id(req.params.id).remove();
    trader.save(function (err) {
      res.redirect("/traders");

    });
  });
}
// function deleteOne(req, res) {
//   Trader.findByIdAndDelete(req.parms.id, function (err, stock) {
//     console.log(stock)
//     res.redirect("/traders");
//   });
// }