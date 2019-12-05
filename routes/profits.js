var router = require("express").Router();
var profitsCtrl = require("../controllers/profits");

router.get('/profits', isLoggedIn, profitsCtrl.index);
router.post('/profits', isLoggedIn, profitsCtrl.create);
router.delete("/profits/:id", isLoggedIn, profitsCtrl.delProfits);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;