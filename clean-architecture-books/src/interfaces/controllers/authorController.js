const Author = require("../../domain/entities/Author");
const authorRepository = require("../../infrastructure/repositories/authorRepository");

const createAuthor = (req, res) => {
    const { id, name } = req.body;
    const newAuthor = new Author(id, name);
    authorRepository.create(newAuthor);
    res.status(201).json(newAuthor);
};

const getAuthors = (req, res) => {
    res.json(authorRepository.getAll());
};

module.exports = { createAuthor, getAuthors };
