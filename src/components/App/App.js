import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BookStoreServiceProvider } from '../BookStoreServiceContext';
import { AboutBookPage, CartPage } from '../Pages';
import Header from '../Header';
import BookCardList from '../BookCardList';
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
      count: 2,
      price: 3500,
    },
  ];

  return (
    <BookStoreServiceProvider value={null}>
      <Switch>
        <Route path="/shop-cart" exact={true} component={CartPage} />
        <Route path="/about-book" exact={true} component={AboutBookPage} />
      </Switch>
      <Header />
      <BookCardList books={books} />
      <Table books={books} />
    </BookStoreServiceProvider>
  );
};

export default App;
