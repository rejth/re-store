const defaultState = {
  books: [],
  cartBooks: [
    {
      id: 1,
      title: 'JavaScript. Detailed guide',
      price: 3500,
      total: 3500,
      count: 1,
    },
    {
      id: 2,
      title: 'Client-Server Web Apps with JavaScript and Java',
      price: 3200,
      total: 3200,
      count: 1,
    },
  ],
  loading: true,
  error: false,
};

// обновление корзины
const addItemToCart = (cartBooks, item, index) => {
  // если в корзине еще нет выбранной книги, добавляем новую книгу
  if (index === -1) return [...cartBooks, item];
  // иначе обновляем корзину, добавляя новый экземпляр книги
  return [...cartBooks.slice(0, index), item, ...cartBooks.slice(index + 1)];
};

// создание нового экземпляра книги для добавления к корзину
const updateCartItem = (book, item = {}) => {
  const { total = 0, count = 0 } = item;
  return {
    ...book,
    total: total + book.price,
    count: count + 1,
  };
};

// удаление экземпляра книги из корзины
const removeItemFromCart = (cartBooks, item, index) => {
  const newItem = {
    ...item,
    total: item.total - item.price,
    count: item.count - 1,
  };
  return [...cartBooks.slice(0, index), newItem, ...cartBooks.slice(index + 1)];
};

// удаление всех экземпляров книги из корзины
const deleteItem = (cartBooks, index) => [
  ...cartBooks.slice(0, index),
  ...cartBooks.slice(index + 1),
];

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
      // id выбранной книги
      const bookId = payload;
      // поиск выбранной книги в исходных данных
      const book = state.books.find(book => book.id === bookId);
      // поиск выбранной книги в корзине
      const cartItemIdx = state.cartBooks.findIndex(book => book.id === bookId);
      const cartItem = state.cartBooks[cartItemIdx];
      // создание|обновление экземпляра книги
      const newItem = updateCartItem(book, cartItem);
      // обновляем state, добавляя новый экземпляр книги в корзину
      return {
        ...state,
        cartBooks: addItemToCart(state.cartBooks, newItem, cartItemIdx),
      };
    }

    // Удаление экземпляра книги из корзины
    case 'BOOK_REMOVED_FROM_CART': {
      const bookId = payload;
      const cartItemIdx = state.cartBooks.findIndex(book => book.id === bookId);
      const cartItem = state.cartBooks[cartItemIdx];
      return {
        ...state,
        cartBooks: removeItemFromCart(state.cartBooks, cartItem, cartItemIdx),
      };
    }

    // Полное удаление всех экземпляров книги из корзины
    case 'BOOK_DELETED': {
      const bookId = payload;
      const cartItemIdx = state.cartBooks.findIndex(book => book.id === bookId);
      return {
        ...state,
        cartBooks: deleteItem(state.cartBooks, cartItemIdx),
      };
    }

    default:
      return state;
  }
};

export default reducer;
