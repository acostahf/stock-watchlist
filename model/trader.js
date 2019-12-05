var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stockSchema = new Schema(
  {
    symbol: { type: String, default: 'BA' },
    price: { type: Number, default: 5 },
    buy: { type: Number, default: 5 },
    sell: { type: Number, default: 5 },
  },
  {
    timestamps: true
  }
);

var traderSchema = new Schema(
  {
    name: String,
    email: String,
    stocks: [stockSchema],
    googleId: String
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Trader", traderSchema);
