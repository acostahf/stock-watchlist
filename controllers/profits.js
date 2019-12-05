var Trader = require('../model/trader');

module.exports = {
    index,
    create,

};
function index(req, res, next) {
    res.render("profits/index", {
        user: req.body
    });
}

function create(req, res, next) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }

    req.user.profits.push(req.body);
    req.user.save(function (err) {
        res.redirect("/traders");
    });
}
