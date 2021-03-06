export default class BookStoreService {
  defaultData = [
    {
      id: 1,
      title: 'JavaScript. Detailed guide',
      author: 'David Flanagan',
      price: 3500,
      total: 3500,
      count: 1,
      image: '/re-store/img/book1.jpg',
    },
    {
      id: 2,
      title: 'Client-Server Web Apps with JavaScript and Java',
      author: 'Casimir Saternos',
      price: 3200,
      total: 3200,
      count: 1,
      image: '/re-store/img/book2.jpg',
    },
  ];

  getBooks() {
    return new Promise(resolve => setTimeout(resolve(this.defaultData), 700));
  }
}
