const defaultState = {
  books: [],
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'BOOKS_LOADED':
      return { books: payload };
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
