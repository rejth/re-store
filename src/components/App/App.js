import React from 'react';
import { BookStoreServiceProvider } from '../BookStoreServiceContext';
import Header from '../Header';
import CardItem from '../BookCard';
import Table from '../Table';

const App = () => {
  const books = [
    {
      id: 1,
      title: 'JavaScript. Подробное руководство',
      author: 'Дэвид Флэнаган',
      count: 1,
      price: 3000,
    },
    {
      id: 2,
      title: 'Client-Server Web Apps with JavaScript and Java',
      author: 'Casimir Saternos',
      count: 1,
      price: 3500,
    },
  ];

  return (
    <BookStoreServiceProvider value={null}>
      <Header />
      <div className="row">
        <div className="col-sm-6">
          <CardItem
            title={books[0].title}
            author={books[0].author}
            price={books[0].price}
            image={'book1.jpg'}
          />
        </div>
        <div className="col-sm-6">
          <CardItem
            title={books[1].title}
            author={books[1].author}
            price={books[0].price}
            image="book2.jpg"
          />
        </div>
      </div>
      <Table books={books} />
    </BookStoreServiceProvider>
  );
};

export default App;
