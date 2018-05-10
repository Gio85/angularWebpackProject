const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const Book = require('../models/book');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Book.create([{
    title: 'Un altro giro di giostra',
    author: 'Tiziano Terzani',
    image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.macrolibrarsi.it%2Fdata%2Fcop%2Fzoom%2Fg%2Fgiro-senza-giostra.jpg&f=1',
    summary: 'Viaggiare è sempre stato per Tiziano Terzani un modo di vivere e così, quando gli viene annunciato che la sua vita è ora in pericolo, mettersi in viaggio alla ricerca di una soluzione è la sua risposta istintiva. Solo che questo è un viaggio diverso da tutti gli altri, e anche il più difficile perché ogni passo, ogni scelta - a volte fra ragione e follia, fra scienza e magia - ha a che fare con la sua sopravvivenza. Alla fine il viaggio esterno alla ricerca di una cura si          trasforma in un viaggio interiore, il viaggio di ritorno alle radici divine dell\'uomo. Un libro sull\'America, un libro sull\'India, un libro sulla medicina classica e quella alternativa, un libro sulla ricerca della propria identità.',
    genre: 'Autobiografia'
  },{
    title: 'The Lord of the Rings',
    author: '	J. R. R. Tolkien',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
    summary: 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.',
    genre: 'Fantasy'
  },{
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J. K. Rowling',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
    summary: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. It is the first novel in the Harry Potter series and Rowling\'s debut novel, first published in 1997 by Bloomsbury. It was published in the United States as Harry Potter and the Sorcerer\'s Stone by Scholastic Corporation in 1998. The plot follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardy. Harry makes close friends and a few enemies during his first year at the Hogwarts School of Witchcraft and Wizardry. With the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry\'s parents, but failed to kill Harry when he was just 15 months old.',
    genre: 'Fantasy'
  }])
    .then(books => console.log(`${books.length} books created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
