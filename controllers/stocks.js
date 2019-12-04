// var Stock = require("../model/stock");
// var User = require("../model/user");

// module.exports = {
//   // index,
//   // show,
//   new: newStock,
//   create,
//   delete: deleteOne
// };

// //stock has to match with the show stock. ect.
// // function show(req, res) {
// //   Stock.findById(req.params.id, function(err, stock) {
// //     res.render("stocks/show", { title: "stock Detail", user: "d", stock });
// //   });
// // }

// function create(req, res) {
//   for (let key in req.body) {
//     if (req.body[key] === "") delete req.body[key];
//   }
//   let stock = new Stock(req.body);
//   req.stock.user.push(stock._id);
//   stock.save(function(err) {
//     if (err) return res.send(err);

//     res.redirect(`/users`);
//   });
// }

// function newStock(req, res) {
//   Stock.findById(req.params.id, function(err, stock) {
//     res.render("users/new", { title: "Add stocks", user: "d", stock });
//   });
// }
// function deleteOne(req, res) {
//   Stock.findByIdAndDelete(req.params.id, function(err, stock) {
//     res.redirect("/user");
//   });
// }
// // function index(req, res) {
// //   Stock.find({})
// //     .populate("user")
// //     .then(function(stocks) {
// //       res.redirect("/users");
// //     });
// // }
