var Stock = require("../model/stock");

module.exports = {
  index
};

// function index(req, res, next) {
//   res.render("/stocks", {
//     title: "Stock quotes",
//     user: req.user
//   });
// }
function index(req, res) {
  Stock.find({}, function(err, stocks) {
    res.render("stocks", {
      title: "Stock quotes",
      user: "d",
      stocks
    });
  });
}
