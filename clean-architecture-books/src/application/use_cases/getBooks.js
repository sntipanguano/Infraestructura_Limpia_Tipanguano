const getBooks = (bookRepository) => {
    return bookRepository.getAll();
};

module.exports = getBooks;
