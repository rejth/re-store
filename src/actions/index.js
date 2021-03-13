const booksLoaded = newBooks => ({
  type: 'BOOKS_LOADED',
  payload: newBooks,
});

const booksRequested = () => ({
  type: 'BOOKS_REQUESTED',
});

const booksError = () => ({
  type: 'BOOKS_ERROR',
});

export { booksLoaded, booksRequested, booksError };
