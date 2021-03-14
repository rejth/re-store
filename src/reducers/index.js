const defaultState = {
  books: [],
  cartBooks: [
    {
      id: 1,
      title: 'JavaScript. Detailed guide',
      author: 'David Flanagan',
      price: 3500,
      count: 3,
      image: '../img/book1.jpg',
    },
    {
      id: 2,
      title: 'Client-Server Web Apps with JavaScript and Java',
      author: 'Casimir Saternos',
      price: 3200,
      count: 2,
      image: '../img/book2.jpg',
    },
  ],
  loading: true,
  error: false,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    // FETCH_..._REQUEST - name convention для получения данных с сервера
    case 'FETCH_BOOKS_REQUEST':
      return { ...state, books: [], loading: true, error: false };
    // FETCH_..._SUCCESS - name convention для успешного сетевого запроса
    case 'FETCH_BOOKS_SUCCESS':
      return { ...state, books: payload, loading: false };
    // FETCH_..._REQUEST - name convention для ошибки при выполнении сетевого запроса
    case 'FETCH_BOOKS_FAILURE':
      return { ...state, books: [], error: true };
    case 'ADD_BOOK_TO_CART':
      return { ...state, cartBooks: payload };
    case 'REMOVE_BOOK_FROM_CART':
      return { ...state, cartBooks: payload };
    case 'REMOVE_BOOK':
      return { ...state, cartBooks: payload };
    default:
      return state;
  }
};

export default reducer;
