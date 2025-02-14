const Book = require("../../domain/entities/Book");

const createBook = (bookRepository, { id, title, authorId }) => {
    const newBook = new Book(id, title, authorId);
    return bookRepository.create(newBook);
};

module.exports = createBook;
