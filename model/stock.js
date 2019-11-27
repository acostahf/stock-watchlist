var mongoose = require("mongoose");

var stockSchema = new mongoose.Schema(
  {
    ticker: String,
    price: Number,
    googleId: String
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Stock", stockSchema);
