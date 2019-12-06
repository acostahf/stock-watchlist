var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    comments: { type: String, default: 'sounds good!' }
  }
)

var profitSchema = new Schema(
  {
    profits: { type: Number, default: 0 },
    week: { type: String, default: 'week 1' },

  },
  {
    timestamps: true
  }
)

var stockSchema = new Schema(
  {
    symbol: { type: String, default: 'BA' },
    price: { type: Number, default: 5 },
    buy: { type: Number, default: 5 },
    sell: { type: Number, default: 5 },
    comments: [commentSchema]
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
    profits: [profitSchema],
    googleId: String
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Trader", traderSchema);
