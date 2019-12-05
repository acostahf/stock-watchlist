var router = require("express").Router();
var tradersCtrl = require("../controllers/traders");

// GET /traders
router.get("/traders", tradersCtrl.index);
//Post stocks
router.post("/stocks", isLoggedIn, tradersCtrl.addStock);

router.delete("/stocks/:id", isLoggedIn, tradersCtrl.delStock);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
