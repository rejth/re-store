const defaultState = {
  books: [], // исходные данные
  cartBooks: [], // заказанные книги
  loading: true,
  error: false,
};

// добавление/удаление экземпляра(-ов) книги
const updateCartItems = (cartBooks, item, index) => {
  // если в заказе еще нет выбранной книги, добавляем новую книгу к заказу
  if (index === -1) {
    return [...cartBooks, item];
  }
  // если количество экземпляров книги = 0, удаляем книгу из заказа
  if (item.count === 0) {
    return [...cartBooks.slice(0, index), ...cartBooks.slice(index + 1)];
  }
  // иначе обновляем заказ, добавляя новый экземпляр книги
  return [...cartBooks.slice(0, index), item, ...cartBooks.slice(index + 1)];
};

// создание нового объекта (книги) для обновления state (cartBooks)
const updateCartItem = (book, item = {}, quantity) => {
  const { total = 0, count = 0 } = item;
  return {
    ...book,
    total: total + quantity * book.price,
    count: count + quantity,
  };
};

// обновление заказа
const updateOrder = (state, bookId, quantity) => {
  const { books, cartBooks } = state;
  const book = books.find(book => book.id === bookId);
  const cartItemIdx = cartBooks.findIndex(book => book.id === bookId);
  const cartItem = cartBooks[cartItemIdx];
  const newItem = updateCartItem(book, cartItem, quantity);
  return {
    ...state,
    cartBooks: updateCartItems(cartBooks, newItem, cartItemIdx),
  };
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

    // Добавление экземпляра книги к заказу
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, payload, 1);

    // Удаление экземпляра книги из заказа
    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, payload, -1);

    // Полное удаление всех экземпляров книги из заказа
    case 'ALL_BOOK_REMOVED_FROM_CART': {
      const bookId = payload;
      const cartItemIdx = state.cartBooks.findIndex(book => book.id === bookId);
      const cartItem = state.cartBooks[cartItemIdx];
      return updateOrder(state, payload, -cartItem.count);
    }

    default:
      return state;
  }
};

export default reducer;
