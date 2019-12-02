var express = require("express");
var router = express.Router();
var stocksCtrl = require("../controllers/stocks");

// GET /stocks
router.get("/", stocksCtrl.index);
router.get("/new", stocksCtrl.new);
router.post("/", stocksCtrl.create);
router.get("/:id", stocksCtrl.show);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
