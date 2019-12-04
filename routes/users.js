var router = require("express").Router();
var usersCtrl = require("../controllers/users");

// GET /users
router.get("/users", isLoggedIn, usersCtrl.index);
router.get("/users/new", usersCtrl.new);
router.post("/", usersCtrl.create);
router.get("/:id", usersCtrl.show);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
