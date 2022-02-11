const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://userone:userone@ictakfiles.u4z6y.mongodb.net/myblog?retryWrites=true&w=majority"
);

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
