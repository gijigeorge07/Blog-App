const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  description: String,
  name: String,
  upvoters: Array,
  comments: Array,
});

var ArticleInfo = mongoose.model("articles", articleSchema);

module.exports = ArticleInfo;
