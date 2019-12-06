var router = require("express").Router();
var commentsCtrl = require("../controllers/comments");

router.post('traders/stock/:id/comments', commentsCtrl.create);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;