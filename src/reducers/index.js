const defaultState = {
  books: [],
  cartBooks: [
    {
      id: 1,
      title: 'JavaScript. Detailed guide',
      author: 'David Flanagan',
      price: 3500,
      count: 1,
      image: '../img/book1.jpg',
    },
    {
      id: 2,
      title: 'Client-Server Web Apps with JavaScript and Java',
      author: 'Casimir Saternos',
      price: 3200,
      count: 1,
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

    // Добавление экземпляра книги в корзину
    case 'BOOK_ADDED_TO_CART': {
      const bookId = payload;
      const book = state.books.find(book => book.id === bookId);
      const newItem = {
        id: bookId,
        title: book.title,
        author: book.author,
        price: book.price,
        count: book.count,
        image: book.image,
      };
      return { ...state, cartBooks: [...state.cartBooks, newItem] };
    }

    // Удаление экземпляра книги из корзины
    case 'BOOK_REMOVED_FROM_CART':
      return { ...state, cartBooks: payload };

    // Полное удаление всех экземпляров книги из корзины
    case 'BOOK_DELETED':
      return { ...state, cartBooks: payload };

    default:
      return state;
  }
};

export default reducer;
