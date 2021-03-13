const defaultState = {
  books: [],
  booksInCart: [],
  loading: true,
  error: false,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    // FETCH_..._REQUEST - name convention для получения данных с сервера
    case 'FETCH_BOOKS_REQUEST':
      return { books: [], booksInCart: [], loading: true, error: false };
    // FETCH_..._SUCCESS - name convention для успешного сетевого запроса
    case 'FETCH_BOOKS_SUCCESS':
      return { ...state, books: payload, loading: false };
    // FETCH_..._REQUEST - name convention для ошибки при выполнении сетевого запроса
    case 'FETCH_BOOKS_FAILURE':
      return { ...state, books: [], error: true };
    case 'ADD_BOOK_TO_CART':
      return { ...state, booksInCart: payload };
    case 'REMOVE_BOOK_FROM_CART':
      return { ...state, booksInCart: payload };
    case 'REMOVE_BOOK':
      return { ...state, booksInCart: payload };
    default:
      return state;
  }
};

export default reducer;
