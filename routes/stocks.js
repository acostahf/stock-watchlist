var express = require("express");
var router = express.Router();
var stocksCtrl = require("../controllers/stocks");

// GET /stocks
// router.get("/", stocksCtrl.index);
router.get("/users.new", stocksCtrl.new);
router.post("/users", stocksCtrl.create);
// router.get("/:id", stocksCtrl.show);

// /* GET /api/stocks  */
// router.get("/users", stocksCtrl.index);

// // post /api/stocks
// router.post("/users", stocksCtrl.create);

// //get/api/stocks/id
// router.get("/users/:id", stocksCtrl.show);

// //PUT/api/stocks/id
// // router.put("/stocks/:id", stocksCtrl.update);

// //Delete/api/stocks
router.delete("/users/:id", stocksCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
