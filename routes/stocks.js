var router = require("express").Router();
var stocksCtrl = require("../controllers/stocks");

// GET /stocks
router.get("/", stocksCtrl.index);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
