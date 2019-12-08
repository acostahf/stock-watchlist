const Trader = require("../model/trader");

module.exports = {
  index,
  addStock,
  delStock,
  show,
  // update,
  // edit

};

function index(req, res, next) {

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
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
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

function show(req, res) {
  Trader.findOne({ _id: req.user._id })
    .exec((err, trader) => {
      let stocks = trader.stocks;
      stocks.forEach(function (h) {
        let correctStock = "";
        if (h._id == req.params.id) {
          correctStock = h;
          res.render("traders/show", {
            trader,
            correctStock,
            user: req.user,
            name: req.query.name
          });
        }
      });
    });
  // });
}
// function edit(req, res, next) {
//  Trader.findById(req.params.id, function (err, stoc) {
//   Trader.forEach(function (trader) {
//     trader.stocks.forEach(function (stock) {
//       console.log(stock)
//     })
//   })
// }
// function update(req, res, next) {
//   let traderStock = Trader.stocks
//   traderStock.findById(req.params.id, function (err, stoc) {
//     res.redirect('/traders/show', {

//     })
//   })
// }