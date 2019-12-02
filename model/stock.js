var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stockSchema = new Schema(
  {
    ticker: String,
    price: Number,
    buy: Number,
    sell: Number
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Stock", stockSchema);
