const router = require('express').Router();
const books = require('../controllers/books');
const auth = require('../controllers/auth');

//Book routes
router.route('/books')
  .get(books.index)
  .post(books.create);

router.route('/books/:id')
  .get(books.show)
  .put(books.update)
  .delete(books.delete);

//Authentication routes
router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
