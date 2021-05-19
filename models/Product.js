const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  description: String,
  stock: Number,
  blocked: Number,
  lastChanged: { type: Date, default: Date.now },
  active: Boolean,
});

module.exports = mongoose.model("Product", productSchema);
