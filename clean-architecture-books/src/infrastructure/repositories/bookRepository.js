const { books } = require("../database/inMemoryDatabase");

const bookRepository = {
    getAll: () => books,
    getById: (id) => books.find(book => book.id === id),
    create: (book) => {
        books.push(book);
        return book;
    }
};

module.exports = bookRepository;
