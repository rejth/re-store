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

const fetchBooks = (dispatch, bookStoreService) => () => {
  dispatch(booksRequested());
  bookStoreService
    .getBooks() // получение данных
    .then(response => dispatch(booksLoaded(response))) // обновление state.books и state.loading
    .catch(() => dispatch(booksError())); // обновление state.books и state.error
};

export { fetchBooks };
