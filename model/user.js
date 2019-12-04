var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stockSchema = new Schema(
  {
    symbol: String,
    price: Number,
    buy: Number,
    sell: Number
  },
  {
    timestamps: true
  }
);

var userSchema = new Schema(
  {
    name: String,
    email: String,
    stock: [stockSchema],
    googleId: String
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("User", userSchema);
