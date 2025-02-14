const { authors } = require("../database/inMemoryDatabase");

const authorRepository = {
    getAll: () => authors,
    getById: (id) => authors.find(author => author.id === id),
    create: (author) => {
        authors.push(author);
        return author;
    }
};

module.exports = authorRepository;
