const defaultState = {
  books: [],
  loading: true,
  error: false,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    // FETCH_..._REQUEST - name convention для получения данных с сервера
    case 'FETCH_BOOKS_REQUEST':
      return { books: [], loading: true, error: false };
    // FETCH_..._SUCCESS - name convention для успешного сетевого запроса
    case 'FETCH_BOOKS_SUCCESS':
      return { books: payload, loading: false, error: false };
    // FETCH_..._REQUEST - name convention для ошибки при выполнении сетевого запроса
    case 'FETCH_BOOKS_FAILURE':
      return { books: [], loading: false, error: true };
    case 'ADD_BOOK_TO_CART':
      return { books: payload };
    case 'REMOVE_BOOK_FROM_CART':
      return { books: payload };
    case 'REMOVE_BOOK':
      return { books: payload };
    default:
      return state;
  }
};

export default reducer;
