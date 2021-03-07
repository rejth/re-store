export default class BookStoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'javaScript. Подробное руководство',
        author: 'Дэвид Флэнаган',
        price: 3500,
        count: 2,
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
    ];
  }
}
