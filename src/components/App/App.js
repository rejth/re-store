import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AboutBookPage, CartPage } from '../Pages';
import Header from '../Header';
import BookCardList from '../BookCardList';
import TableContainer from '../Table';

const App = () => (
  <React.Fragment>
    <Header />
    <BookCardList />
    <TableContainer />
    <Switch>
      <Route path="/shop-cart" exact={true} component={CartPage} />
      <Route path="/about-book" exact={true} component={AboutBookPage} />
    </Switch>
  </React.Fragment>
);

export default App;
