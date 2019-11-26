var Stock = require('../model/stock');

module.exports= {
    index,
}

function index(req, res) {
    Stock.find({}, function(err, stock) {
    res.render('/stocks/index', {title: 'All Stocks'}, stocks)
    })
}