const defaultState = {
  books: [],
  loading: true,
  error: false,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'BOOKS_REQUESTED':
      return { books: [], loading: true, error: false };
    case 'BOOKS_LOADED':
      return { books: payload, loading: false, error: false };
    case 'BOOKS_ERROR':
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
