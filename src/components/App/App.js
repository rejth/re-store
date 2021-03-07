import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AboutBookPage, CartPage } from '../Pages';
import Header from '../Header';
import BookCardList from '../BookCardList';
import Table from '../Table';

const books = [
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

const App = () => (
  <React.Fragment>
    <Header />
    <BookCardList />
    <Table books={books} />
    <Switch>
      <Route path="/shop-cart" exact={true} component={CartPage} />
      <Route path="/about-book" exact={true} component={AboutBookPage} />
    </Switch>
  </React.Fragment>
);

export default App;
