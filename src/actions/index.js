// action в случае успешного сетевого запроса
const booksLoaded = newBooks => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

// action для получения данных с сервера
const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

// action в случае ошибки при выполнении сетевого запроса
const booksError = () => ({
  type: 'FETCH_BOOKS_FAILURE',
});

// action для добавления экзмепляра книги в корзину
const bookAddedToCart = bookId => ({
  type: 'BOOK_ADDED_TO_CART',
  payload: bookId,
});

// action для удаления экзмепляра книги из корзины
const bookRemovedFromCart = bookId => ({
  type: 'BOOK_REMOVED_FROM_CART',
  payload: bookId,
});

// action для полного удаления всех экзмепляров книги из корзины
const bookDeleted = bookId => ({
  type: 'ALL_BOOK_REMOVED_FROM_CART',
  payload: bookId,
});

// quasi-action для выделения универсальной, часто используемой логики
const fetchBooks = (dispatch, bookStoreService) => () => {
  dispatch(booksRequested());
  bookStoreService
    .getBooks() // получение данных
    .then(response => dispatch(booksLoaded(response))) // обновление state.books и state.loading
    .catch(() => dispatch(booksError())); // обновление state.books и state.error
};

export { fetchBooks, bookAddedToCart, bookRemovedFromCart, bookDeleted };
