var router = require("express").Router();
var usersCtrl = require("../controllers/users");

// GET /users
router.get("/users", isLoggedIn, usersCtrl.index);
//Post stocks
router.post("/stocks", isLoggedIn, usersCtrl.addStock);

router.delete("/stock/:id", isLoggedIn, usersCtrl.delStock);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
