import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { BookStoreServiceProvider } from './components/BookStoreServiceContext';
import BookStoreService from './services/bookstore-service';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';

import store from './store';

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ErrorBoundry>
        <BookStoreServiceProvider value={bookStoreService}>
          <Router>
            <App />
          </Router>
        </BookStoreServiceProvider>
      </ErrorBoundry>
    </ReduxProvider>
  </StrictMode>,
  document.getElementById('root')
);
