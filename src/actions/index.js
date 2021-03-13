const booksLoaded = newBooks => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

const booksError = () => ({
  type: 'FETCH_BOOKS_FAILURE',
});

// quasi-action для выделения универсальной, часто используемой логики
const fetchBooks = (dispatch, bookStoreService) => () => {
  dispatch(booksRequested());
  bookStoreService
    .getBooks() // получение данных
    .then(response => dispatch(booksLoaded(response))) // обновление state.books и state.loading
    .catch(() => dispatch(booksError())); // обновление state.books и state.error
};

export { fetchBooks };
