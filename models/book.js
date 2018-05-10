const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  image: { type: String },
  summary: { type: String },
  genre: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);
