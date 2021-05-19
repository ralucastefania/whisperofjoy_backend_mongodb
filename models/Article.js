const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  text: String,
  publishedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Article", articleSchema);
