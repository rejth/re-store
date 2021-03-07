import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { BookStoreServiceProvider } from './components/BookStoreServiceContext';
import BookStoreService from './services/bookstore-service';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import { AboutBookPage, CartPage } from './components/Pages';

import store from './store';

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ErrorBoundry>
        <BookStoreServiceProvider value={bookStoreService}>
          <Router>
            <Route path="/" exact={true} component={App} />
            <Route path="/shop-cart" exact={true} component={CartPage} />
            <Route path="/about-book" exact={true} component={AboutBookPage} />
          </Router>
        </BookStoreServiceProvider>
      </ErrorBoundry>
    </ReduxProvider>
  </StrictMode>,
  document.querySelector('.root')
);
