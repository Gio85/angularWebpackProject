const Book = require('../models/book');

function booksIndex(req, res, next){
  Book
    .find()
    .exec()
    .then(book => res.json(book))
    .catch(next);
}

function booksShow(req, res, next){
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if(!book) return res.sendStatus(404);
      res.json(book);
    })
    .catch(next);
}

function booksCreate(req, res, next){
  Book
    .create(req.body)
    .then(book => res.sendStatus(201).json(book))
    .catch(next);
}

function booksUpdate(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if(!book) return res.sendStatus(404);
      return Object.assign(book, req.body);
    })
    .then(book => book.save())
    .then(book => res.json(book))
    .catch(next);
}

function booksDelete(req, res, next) {
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if(!book) return res.sendStatus(404);
      return book.remove();
    })
    .then(res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: booksIndex,
  show: booksShow,
  create: booksCreate,
  update: booksUpdate,
  delete: booksDelete
};
