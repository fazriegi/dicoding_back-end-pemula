const {nanoid} = require('nanoid');
const books = require('./books');

const addBook = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(16);
  const finished = readPage === pageCount;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);

    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
      'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);

    return response;
  }

  const book = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(book);
  const response = h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  });
  response.code(201);

  return response;
};

const getAllBooks = (request, h) => {
  const {name, reading, finished} = request.query;
  let dataBooks = [...books];

  if (name) {
    dataBooks = books.filter((book) => book.name.toLowerCase()
        .includes(name.toLowerCase()));
  }

  if (reading) {
    dataBooks = dataBooks.filter((book) => {
      if (book.reading == +reading) {
        return true;
      }

      return false;
    });
  }

  if (finished) {
    dataBooks = dataBooks.filter((book) => {
      if (book.finished == +finished) {
        return true;
      }

      return false;
    });
  }

  const responseBook = dataBooks.map((book) => {
    const {id, name, publisher} = book;
    return {id, name, publisher};
  });

  const response = h.response({
    status: 'success',
    data: {
      books: responseBook,
    },
  });

  return response;
};

const getBookById = (request, h) => {
  const {id} = request.params;

  const book = books.find((book) => book.id == id);

  if (book) {
    const response = h.response({
      status: 'success',
      data: {
        book: book,
      },
    });

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  response.code(404);

  return response;
};

const editBook = (request, h) => {
  const {id} = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);

    return response;
  } else if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    response.code(400);

    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: `Gagal memperbarui buku. readPage tidak boleh lebih besar ` +
      `dari pageCount`,
    });
    response.code(400);

    return response;
  }

  const updatedAt = new Date().toISOString();
  const finished = readPage === pageCount;

  books[index] = {
    ...books[index],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    updatedAt,
  };

  const response = h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  });

  return response;
};

const deleteBook = (request, h) => {
  const {id} = request.params;
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);

  return response;
};


module.exports = {addBook, getAllBooks, getBookById, editBook, deleteBook};
