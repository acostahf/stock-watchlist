var router = require("express").Router();
var tradersCtrl = require("../controllers/traders");

// GET /traders
router.get("/traders", tradersCtrl.index);
router.get("/traders/:id/stocks", isLoggedIn, tradersCtrl.show);
// router.get('/traders/:id/edit', isLoggedIn, tradersCtrl.edit);

//Post stocks
router.post("/stocks", isLoggedIn, tradersCtrl.addStock);
router.delete("/stocks/:id", isLoggedIn, tradersCtrl.delStock);

//PUT stock
router.put("/traders/:id/stocks", isLoggedIn, tradersCtrl.update);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
