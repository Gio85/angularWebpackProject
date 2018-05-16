const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/books';
const secret = process.env.SECRET || 'G6^sk*/>ersTSauV2';

module.exports = { port, dbURI, secret };
