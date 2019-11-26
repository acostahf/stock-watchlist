var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
    ticker: String,
    price: Number,
}) 



module.exports = mongoose.model('Stock', stockSchema);