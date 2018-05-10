const Book = require('../models/book');

function booksIndex(req, res, next){
  Book
    .find()
    .exec()
    .then(book => res.json(book))
    .catch(next);
}

module.exports = {
  index: booksIndex
};
