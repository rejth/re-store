export default class BookStoreService {
  defaultData = [
    {
      id: 1,
      title: 'JavaScript. Подробное руководство',
      author: 'Дэвид Флэнаган',
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
  ];

  getBooks() {
    return new Promise(resolve => setTimeout(resolve(this.defaultData), 700));
  }
}
