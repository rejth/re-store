const defaultState = {
  books: [],
  cartBooks: [
    {
      id: 1,
      title: 'JavaScript. Detailed guide',
      author: 'David Flanagan',
      price: 3500,
      total: 3500,
      count: 1,
      image: '../img/book1.jpg',
    },
    {
      id: 2,
      title: 'Client-Server Web Apps with JavaScript and Java',
      author: 'Casimir Saternos',
      price: 3200,
      total: 3200,
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
      const cartItemIndex = state.cartBooks.findIndex(
        book => book.id === bookId
      );
      const cartItem = state.cartBooks[cartItemIndex];

      // если книги нет в корзине, добавляем новую книгу
      if (!cartItem) {
        const newItem = { ...book, id: bookId };
        return { ...state, cartBooks: [...state.cartBooks, newItem] };
        // иначе обновляем total и count существующей книги
      } else {
        const newItem = {
          ...cartItem,
          total: cartItem.total + cartItem.price,
          count: cartItem.count + 1,
        };
        const newCartBooks = [
          ...state.cartBooks.slice(0, cartItemIndex),
          ...state.cartBooks.slice(cartItemIndex + 1),
        ];
        return { ...state, cartBooks: [...newCartBooks, newItem] };
      }
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
