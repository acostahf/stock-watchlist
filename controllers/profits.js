var Trader = require('../model/trader');

module.exports = {
    index,
    create,
    delProfits,
    show

};
function index(req, res, next) {
    let modelQuery = req.query.name
        ? { name: new RegExp(req.query.name, "i") }
        : {};
    // Default to sorting by name
    let sortKey = req.query.sort || "name";
    Trader.find(modelQuery)
        .sort(sortKey)
        .exec(function (err, traders) {
            if (err) return next(err);
            console.log('this is traders : ', traders)
            // Passing search values, name & sortKey, for use in the EJS
            res.render("profits/index", {
                traders,
                user: req.user,
                name: req.query.name,
                sortKey
            });
        });
}

function create(req, res, next) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }

    req.user.profits.push(req.body);
    req.user.save(function (err) {
        res.redirect("/profits");
    });
}
function delProfits(req, res, next) {
    Trader.findOne({ 'profits._id': req.params.id }, function (err, trader) {
        console.log('fire')
        trader.profits.id(req.params.id).remove();
        trader.save(function (err) {
            res.redirect("/profits");

        });
    });
}
function show(req, res) {
    res.redirect('/profits')
}