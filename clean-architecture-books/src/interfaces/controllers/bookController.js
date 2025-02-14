const bookRepository = require("../../infrastructure/repositories/bookRepository");
const createBook = require("../../application/use_cases/createBook");
const getBooks = require("../../application/use_cases/getBooks");

const createBookHandler = (req, res) => {
    const book = createBook(bookRepository, req.body);
    res.status(201).json(book);
};

const getBooksHandler = (req, res) => {
    res.json(getBooks(bookRepository));
};

module.exports = { createBookHandler, getBooksHandler };
