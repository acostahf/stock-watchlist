var mongoose = require("mongoose");

var stockSchema = new mongoose.Schema(
  {
    ticker: String,
    price: Number,
    buy: Number,
    Sell: Number
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Stock", stockSchema);
