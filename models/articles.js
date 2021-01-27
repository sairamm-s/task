const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
});

const Articles = mongoose.model('article', articleSchema);

module.exports = Articles;
