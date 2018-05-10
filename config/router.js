const router = require('express').Router();
const books = require('../controllers/books');

router.route('/books')
  .get(books.index);
  // .post(books.create);

// router.route('/books/:id')
//   .get(books.show)
//   .put(books.update)
//   .delete(books.delete);


module.exports = router;
